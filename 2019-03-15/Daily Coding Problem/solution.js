/**
make new array where position i = product of all numbers in input, excluding the one at index i
Ex 1
Input: [1,2,3,4,5]
Output: [120,60,40,30,24]

Ex 2
Input: [3,2,1]
Output: [2,3,6]

Ex1 Analysis...
Output: [120,60,40,30,24]
[2x3x4x5, 1x3x4x5, 1x2x4x5, 1x2x3x4]
basically could do this by...
   product / value at i
Product will always start at 1 because of how multiplication works.
*/

/**
 * Solution A
 *  Basic Attempt
 */
const solutionA = (arr) => {
    var result = []
    let product = arr.reduce((a,x)=>a*x) 
    arr.forEach((x) => {
        result.push(product/x)
    })
    return result
}
/**
 * Solution B
 *  Attempt without division.  Using unrefined method
 * **revisit this in the future**
 */
const solutionB = (arr) => {
    var result = []
    for(let i = 0; i<arr.length; i++){
        var product=1
        for(let j = 0; j<arr.length; j++){
            if(i==j) continue
            product = product * arr[j]
        }
        result.push(product)
    }
    return result
}
/**
 * Solution C
 *   Attempt to refine solution B (make it faster)
 */