// collectcing odd values using the recursion helper method design pattern

function collectOddValues(arr){
    // empty array to store the values declared outside the actual recursive function
    // stored outside to avoid resetting every time the code is run
    let result = [];

    // recursive logic
    function helper(helperInput){
        // if empty just return nothing
        if(helperInput.length === 0){
            return;
        }

        // if populated check the first index
        if(helperInput[0] % 2 !== 0){
            // if it passes add to array 'result'
            result.push(helperInput[0]);
        }
        // the function is called again with the first index secluded as it has already been tested
        helper(helperInput.slice(1));
    }
    
    helper(arr);

    return result;
}

collectOddValues([1,2,3,4,54,66,78,77,99,9,8,5,7])