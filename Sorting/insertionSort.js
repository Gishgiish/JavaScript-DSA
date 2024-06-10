// start by picking the second element of the array
// compare it to the one before it and swap if necessary
// continue to the next element and if it is in the incorrect order, 
// iterate through the sorted portion to place it correctly
// repeat until array is sorted

function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let currentVal = arr[i];
        for(let j = i - 1; j >= 0 && arr[j] > currentVal; j--){
            arr[j+1] = arr[j];
            currentVal = arr[j+1];
        }
        
    }
    return arr;
}

console.log(insertionSort([3, 47, 38, 5, 17, 10]));

// works well in a scenario where data is coming in live and needs to be inserted then and there
