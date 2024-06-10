// start looping with a variable called 'i' from the end of the array towards the beginning
// start an inner loop with a variable 'j' from the beginning until 'i - 1'
// compare: if arr[j] is greater than arr[j+1], swap those two values
// return sorted array

function bubbleSort(arr){
    // optimize with the noSwaps variable
    // short circuits loop if there is no more swaps to be made
    let noSwaps;
    for(let i = arr.length; i > 0; i--){
        noSwaps = true;
        for(let j = 0; j < arr.length; j++){
            if(arr[j] > arr[j+1]){
                // swap!
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }

    return arr;
}

console.log(bubbleSort([45, 16, 7, 12, 19, 3, 9]))