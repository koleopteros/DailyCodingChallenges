/**
 * Problem analysis
 * assumptions: Array will always consist of integers only, and Int will always be 1 or greater
 * Input: (Array, Int)
 * Output: Int
 * 
 * Ex 1
 * Input: [5, 11, 3, 50, 60, 90], 2
 * Output: 93 (Buy: 5, Sell: 11; Buy: 3, Sell: 90)
 * 
 * 1 action per iteration, maximum of 2 Adds and Subtract pairs.
 * Python comes to mind since it is super easy to manipulate a List/Array there
 */

 /**
  * SolutionA
  *   Create a second array that is sorted.
  *   Starting from the lowest value, create a "projection" of maximum earnings, starting from its index to the end of the array
  *   repeat process with each remaining value
  *   ... this is a horrible idea
  */

function SolutionA(arr,k){
    let test = arr.slice()
    let sortedArr = arr.slice().sort()
    let projection = []
    let currentProjection = []
    var lastI = 0
    // GENERATE PROJECTIONS
    for(var i of sortedArr){
        //If there is a duplicate, cut out the first one from the "picture"
        if(lastI == i) { 
            test = Array.prototype.concat(
                test.slice(0,test.indexOf(i)),
                test.slice(test.indexOf(i)+1, test.length))
        }
        // generate projections of each possible value.  Ran into issue of duplicate numbers
        test.slice(test.indexOf(i), test.length).forEach( (x) => currentProjection.push(i-x))
        projection.push(currentProjection)
        currentProjection = []
        lastI = i
    }
    //SORT PROJECTIONS
    projection.sort((x,y) => x.length-y.length)
}
function sum(arr){
    let output = arr.reduce((a,x) => a+=arr[x])
    return output
}