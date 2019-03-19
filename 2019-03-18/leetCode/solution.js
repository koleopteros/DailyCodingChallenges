/**
 * SolutionA - easy solution
 * @param {Int} dividend 
 * @param {Int} divisor 
 */
const solutionA = (dividend,divisor) => {
    let count = 0;
    while(dividend>divisor){
        dividend -= divisor
        --count
    }
    return count
}

/**
 * SolutionB - recursive function
 * @param {Int} dividend 
 * @param {Int} divisor 
 */
const solutionB = (dividend, divisor) => {
    if(dividend<=divisor){
        return 1
    }
    return solutionB(dividend-divisor, divisor);
}

var t0 = performance.now()
solutionA(19866753,2)
var t1 = performance.now()
console.log(`SolutionA took ${t1-t0} ms`)

t0 = performance.now()
solutionA(19866753,2)
t1 = performance.now()
console.log(`SolutionB took ${t1-t0} ms`)