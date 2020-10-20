// Given a Linked List, sort the linked list 
// using merge sort. You will need your linked 
// list class from previous lesson to create the 
// list and use all of its supplemental functions to solve this problem.

class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    insertBefore(item, key) {

        let currNode = this.head;
        let previousNode = this.head;

        // If key points to head
        if (key === 0) {
            this.insertFirst(item)
        }
        else {
            let count = 0;
            // Count to node
            while (count < key) {
                // Return null if key isn't found
                if (currNode.next === null) {
                    return null;
                }
                else {
                    count++;
                    previousNode = currNode
                    currNode = currNode.next
                }
            }
            // Insert new node
            previousNode.next = new _Node(item, currNode);
        }
    }

    insertAfter(item, key) {

        let currNode = this.head;
        let previousNode = this.head;
        
        // Count to node
        let count = 0;

        while (count <= key) {

            // Return null if key isn't found
            if (currNode === null) {
                return null;
            }
            else {
                count++;
                previousNode = currNode
                currNode = currNode.next
            }
        }

        // If key refers to last item
        if (currNode === null) {
            // Insert new node and set next pointer to null
            previousNode.next = new _Node(item, null);
        }
        else {
            // Otherwise, insert new node and set next pointer to next node
            previousNode.next = new _Node(item, currNode);
        }
    }

    insertAt(item, key) {
        // Keep track of previous
        let previousNode = this.head; 
        // Start at head
        let currNode = this.head;
        // Keep track of next
        let nextNode = this.head;

        // If key points to head
        if (key === 0) {
            // Insert node at head and set pointer to the next node
            this.head = new _Node(item, this.head.next)
        }
        else {
            // Count to node
            let count = 0;
            
            while (count < key) {
                // Return null if key isn't found
                if (nextNode === null) {
                    return null;
                }
                else {
                    count++;
                    previousNode = currNode 
                    currNode = currNode.next 
                    nextNode = currNode.next
                }
            }

            // key points to last item
            if (nextNode === null) {
                // Insert new node and set next pointer to null
                previousNode.next = new _Node(item, null);
            }
            else {
                // Otherwise, insert new node and set next pointer to next node
                previousNode.next = new _Node(item, nextNode);
            }
        }
    }

    find(item) { 
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }

    findAt(key) {
        // Keep track of previous
        let previousNode = this.head; 
        // Start at head
        let currNode = this.head;

        // If key points to head
        if (key === 0) {
            // Return value at head
            return this.head.value;
        }
        else {
            // Count to node
            let count = 0;
            
            while (count < key) {
                // Return null if key isn't found
                if (currNode.next === null) {
                    return null;
                }
                else {
                    count++;
                    previousNode = currNode 
                    currNode = currNode.next 
                }
            }

            return currNode.value;
        }
    }

    remove(item){ 
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // Save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }

    isEmpty() {
        if (!this.head) {
            return true
        }

        return false
    }

    length(node) {
        if (!node) {
            node = this
        }
        // Bouncer case
        // If the linked list has neither head or value it is empty
        if (!node.head && !node.value) {
            return 0
        }

        // If the linked list is only length of 1
        if (node.head && !node.head.next) {
            return 1
        }

        // Base case
        // If the linkedList contains a value but the 
        // pointer to the next node is null then return 1
        if (node.value && !node.next) {
            return 1
        } 
        // Otherwise start at the head
        if (node.head && node.head.next) {
            return 1 + this.length(node.head.next)
        }
    
        if (node.next) {
            return 1 + this.length(node.next)
        }
        
    }

    display(node) {
        if (!node) {
            node = this
        }
        // Bouncer case
        // If the linked list has neither head or value it is empty
        if (!node.head && !node.value) {
            return null
        }
    
        // Base case
        if (node.value && !node.next) {
            return `${node.value}`
        }
    
        if (node.head) {
            if (node.head.next) {
                return `${node.head.value}\n${this.display(node.head.next)}`
            }
        }
    
        if (node.next) {
            return `${node.value}\n${this.display(node.next)}`
        }
    }
}

module.exports = LinkedList;


function mSort(lst) {
    if (lst.length() <= 1) {
        return lst;
    }

    // find the middle of the linked list and create two new linked lists (left and right)
    const middle = Math.floor(lst.length() / 2);
    let left = new LinkedList();
    let right = new LinkedList();

    for (let i = 0; i < middle; i++) {
        if (left.length() === 0) {
            left.insertFirst(lst.findAt(i), i);
        } else {
            left.insertLast(lst.findAt(i), i)
        }
    } 

    for (let i = middle; i < lst.length(); i++) {
        if (right.length() === 0) {
            right.insertFirst(lst.findAt(i), i)
        } else {
            right.insertLast(lst.findAt(i), i);
        }
    }
    // pass the two new linked lists into mSort
    left = mSort(left);
    right = mSort(right);

    // pass left linked list, right lniked list, and original link list into merge
    return merge(left, right, lst);
};

function merge(left, right, lst) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    // loop through until there are 1 or more items left in BOTH left and right arrays
    while (leftIndex < left.length() && rightIndex < right.length()) {
        // check if the item in the left array is less than item in right array
        if (left.findAt(leftIndex) < right.findAt(rightIndex)) {
            // if it is, replace the value in the array with left item
            lst.insertAt(left.findAt(leftIndex), outputIndex);
            // Increment outputIndex and leftIndex
            outputIndex++;
            leftIndex++;
        } else {
            // else replace the value in the array with the right item
            lst.insertAt(right.findAt(rightIndex), outputIndex);
            // Increment outputIndex and rightIndex
            outputIndex++;
            rightIndex++;
        }
    }

    // After looping, if there is still an item in the left array, add it to the array
    for (let i = leftIndex; i < left.length(); i++) {
        lst.insertAt(left.findAt(i), outputIndex);
        // Increment outputIndex
        outputIndex++;
    }

    // After looping if there is still an item in the right array, add it to the array
    for (let i = rightIndex; i < right.length(); i++) {
        lst.insertAt(right.findAt(i), outputIndex);
        // Increment outputIndex
        outputIndex++;
    }
    return lst;
};

let lst = new LinkedList();
lst.insertFirst(21)
lst.insertLast(1)
lst.insertLast(26)
lst.insertLast(45)
lst.insertLast(29)
lst.insertLast(28)
lst.insertLast(2)
lst.insertLast(9)
lst.insertLast(16)
lst.insertLast(49)
lst.insertLast(39)
lst.insertLast(27)
lst.insertLast(43)
lst.insertLast(34)
lst.insertLast(46)
lst.insertLast(40)

console.log(mSort(lst).display())

// 1
// 2
// 9
// 16
// 21
// 26
// 27
// 28
// 29
// 34
// 39
// 40
// 43
// 45
// 46
// 49
