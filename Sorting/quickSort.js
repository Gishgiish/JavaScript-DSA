// Pivot helper(partition): responsible for arranging elements in an array on either side of a pivot.
//          - given an array, this helper function should designate an element as the pivot 
//          - it should then rearrange elements in the arrayy so that all values less than the pivot are moved to the right of the pivot
//          - the order of elements on either side of the pivot doesn't matter
//          - the helper should do this in place, that is, it should not create a new array
//          - when complete, the helper should return the index of the pivot

// it will help to accept 3 arguments: an array, start index, end index
// grab pivot from the start of the array(can be picked from anywhere but this is simpler)
// store the current pivot index in a variable (keeps track of where the pivot should end up)
// loop through the array from the start until the end
    // - if the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
// swap the starting element(i.e. the pivot) with the pivot index 
// return the pivot index

function pivot(arr, start=0, end=arr.length + 1){
    // function to swap
    function swap(array, i, j){
        [array[i], array[j]] = [array[j], array[i]];
    }

    // initiate variables
    let pivot = arr[start];
    let swapIdx = start;

    // loop over everything except the starting index
    for(let i = start + 1; i < arr.length; i++){
        // compare the pivot to the other values and add to counter
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr, swapIdx, i);
            // console.log(arr);
        }
    }

    // swap the pivot from the start to the swapPoint
    swap(arr, start, swapIdx);
    // return index of the pivot
    return swapIdx;
}


// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));

// QuickSort: call pivot helper on the array
// when the helper returns to you the updated pivot index, recursively call the pivot helper on the sub array to the left of that index, 
// and the subarray to the right of that index
// your base case occurs when you consider a subarray with less than 2 elements


function quickSort(arr, left = 0, right = arr.length - 1){
    // base case
    if(left < right){
        let pivotIndex = pivot(arr, left, right);
        // left side
        quickSort(arr, left, pivotIndex - 1);
        // right side
        quickSort(arr, pivotIndex + 1, right);
    }
    

    return arr;
}

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));