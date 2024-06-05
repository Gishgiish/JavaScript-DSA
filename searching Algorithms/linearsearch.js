// the function accepts an array and a value. 
// loop through the array and check if the current array element is equal to the value 
// if it is, return the index at which the element is found
// if the value is never found, return -1

function checkForValue(arr, value){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === value){
            return i;
        } 
    }

    return -1;
}

console.log(checkForValue([34, 56, 2, 7, 9], 2));