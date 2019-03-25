/**
 * BinaryNode
 * Left and right represent 1 and 2
 * @param {Number}, number of steps
 * @returns {Number}, number of unique ways to climb.
 */
class BinaryNode {
    constructor() {
        this.left
        this.right
    }
}
/**
 * treeBuilder
 * takes a root and builds a binary tree that represents
 * all unique combinations of 1 and 2 that sum up to value of num 
 * @param {BinaryNode} root 
 * @param {Number} num 
 */
const treeBuilder = (root, num) => {
    let left = new BinaryNode()
    let right = new BinaryNode()
    if(num>=-1){
        if(num>1){
            root.right = right
            treeBuilder(right,num-2)
        }
        if(num>0){
            root.left = left
            treeBuilder(left,num-1)
        }
    }
}
/**
 * SolutionA
 * Seeks to the end of each branch and returns the total number of
 * leaves there are in the binary tree
 * @param {BinaryNode} root 
 * @param {Number} num 
 */
const solutionA = (root, num) => {
    let value = 0
    let pointer = root
    if(pointer.left == undefined || num == 0){
        return 1
    } else {
        value += solutionA(pointer.left, num-1)
        if(pointer.right != undefined){
            value += solutionA(pointer.right, num-2)
        }
        return value
    }
}
/**
 * runSolutionA
 * runs the three commands to print out the answer to the question
 * @param {Number} n 
 */
const runSolutionA = (n) => {
    let root = new BinaryNode()
    treeBuilder(root,n)
    console.log(solutionA(root,n))
}