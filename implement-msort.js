let count = 0
function mSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    count++
    left = mSort(left);
    right = mSort(right);
    return merge(left, right, array);
};

let mergeCount = 0
function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    console.log(array)
    // loop through until there are 1 or more items left in BOTH left and right arrays
    while (leftIndex < left.length && rightIndex < right.length) {
        // check if the item in the left array is less than item in right array
        if (left[leftIndex] < right[rightIndex]) {
            // if it is, replace the value in the array with left item
            array[outputIndex] = left[leftIndex];
            // Increment outputIndex and leftIndex
            outputIndex++;
            leftIndex++;
        }
        else {
            // else replace the value in the array with the right item
            array[outputIndex] = right[rightIndex];
            // Increment outputIndex and rightIndex
            outputIndex++;
            rightIndex++;
        }
    }

    // After looping, if there is still an item in the left array, add it to the array
    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex] = left[i];
        // Increment outputIndex
        outputIndex++;
    }

    // After looping if there is still an item in the right array, add it to the array
    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex] = right[i];
        // Increment outputIndex
        outputIndex++;
    }
    mergeCount++
    return array;
};

const sampleArr = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]

console.log(mSort(sampleArr))