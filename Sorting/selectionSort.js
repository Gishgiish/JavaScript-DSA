// make a variable to store the minimum value
// store the first element as the smallest value
// compare this item to the next item(s) in the array until you find a smaller number
// if a smaller number is found designate that as the new minimum and continue until the end of the array
// if the minimum is not the value (index) that was there initially, swap the two values
// repeat this with the next element until the array is sorted
// return sorted array


function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let min = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j;                
            }
        }
        // optimize the sorting
        if( i !== min){
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }

    return arr;
}

console.log(selectionSort([23, 12, 3, 15, 9, 20]))