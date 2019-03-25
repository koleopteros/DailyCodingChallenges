/**
 * Node
 * Left and right represent 1 and 2
 * @params integer, number of steps
 * @returns integer, number of unique ways to climb.
 */
class BinaryNode {
    constructor() {
        this.left
        this.right
    }
}

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

const runSolutionA = (n) => {
    let root = new BinaryNode()
    treeBuilder(root,n)
    console.log(solutionA(root,n))
}