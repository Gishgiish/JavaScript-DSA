// Invoking the same function over and over again with a different input until you reach your base case
// example: counting down using recursion
function countDown(num) {
    if (num <= 0) {
        console.log("All Done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}

// example of usage
countDown(10);