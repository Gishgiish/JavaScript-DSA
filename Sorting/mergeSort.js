// Merging arrays: 1. create an empty array, take a look at the smallest values in each input array
//                 2. while there are still values we haven't looked at...
//                          - if the value in the first array is smaller than the value in the second array, 
//                              push the value in the first array into our results and move on to the next value in the first array
//                          - if the value in the first array is larger than the value in the second array,
//                              push the value in the second array into our results and move on to the next value in the second array
//                          - once we exhaust one array, push in all remaining values from the other array


// helper function to merge sorted arrays
function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;

    // loop through comparing the values from the different arrays
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] >= arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    // if the array still has any elements push everything to the new array
    while(i < arr1.length){
        results.push(arr1[i]);
        i++;
    }
    // if the array still has any elements push everything to the new array
    while(j < arr2.length){
        results.push(arr2[j]);
        j++;
    }

    return results;
}

// console.log(merge([1, 3, 6], [2, 7, 14, 20]));

// Merge sort: break up the array into halves until you have arrays that are empty or have one element
            // once you have smaller sorted arrayys, merge those arrays with other sorted arrays until you are back at the full length of the array
            // once the array has been merged back together, return the merged (and sorted) array

function mergeSort(arr){
    if(arr.length <= 1)
    return arr;
    // mergeSort()
    // split the array
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    // merge the two arrays
    return merge(left, right);

}

console.log(mergeSort([10, 24, 76, 73, 72, 1, 9, 13, 50]));