// 8. Sorting books
// Imagine that I gave you 20 books to sort in alphabetical 
// order. Express this as an algorithm and then implement 
// your algorithm.

function partition(array, start, end) {
    function swap(array, i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    };
    
    const pivot = array[end - 1];
    let j = start;

    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }

    swap(array, end-1, j);
    return j;
};

function qSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }

    const middle = partition(array, start, end);

    array = qSort(array, start, middle);
    array = qSort(array, middle + 1, end);
    
    return array;
};

const books =[
    'The Hobbit',
    'Do Androids Dream of Electric Sheep?',
    'Dune',
    'Neuromancer',
    'Farenheit 451',
    'The Left Hand of Darkness',
    'Nineteen Eighty-Four',
    'Brave New World',
    'Slaughterhouse Five',
    'The Three-Body Problem',
    'Ubik',
    'Dhalgren',
    'The Sirens of Titan',
    'Kindred',
    'Never Let Me Go',
    'The Man in The High Castle',
    'The Dispossessed',
    'Snow Crash',
    'Seveneves',
    'Annihilation'
]

console.log(qSort(books))
// [
//     'Annihilation',
//     'Brave New World',
//     'Dhalgren',
//     'Do Androids Dream of Electric Sheep?',
//     'Dune',
//     'Farenheit 451',
//     'Kindred',
//     'Neuromancer',
//     'Never Let Me Go',
//     'Nineteen Eighty-Four',
//     'Seveneves',
//     'Slaughterhouse Five',
//     'Snow Crash',
//     'The Dispossessed',
//     'The Hobbit',
//     'The Left Hand of Darkness',
//     'The Man in The High Castle',
//     'The Sirens of Titan',
//     'The Three-Body Problem',
//     'Ubik'
//   ]