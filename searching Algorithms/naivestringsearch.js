// function accepts two strings, the whole string and pattern we are looking for
// loop over the longer string
// loop over the shorter string
// if the characters don't match, break out of inner loop
// if characters match, keep going
// if inner loop completes and find a match, increment the count of matches
//  return the count

function naiveSearch(str, pattern){
    let count = 0;
    for (let i = 0; i < str.length; i++){
        for(let j = 0; j < pattern.length; j++){
            if(pattern[j] !== str[i+j]){
                break;
            }
            if (j === pattern.length - 1){
                count++;
            }
        }
    }
    return count;

}

console.log(naiveSearch("lorry loled lolly", "lol" ));