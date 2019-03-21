/**
 * creating structure to create the binary tree
 * isRoot: if undefined or null, then it is parent
 * leftLeaf: left branch
 * rightLeaf: right branch
 * val: value held by this node
 */

class TreeGuy {
    constructor(parent, val){
        this.isRoot = parent
        this.val = val
    }
    get value() {
       return this.val
    }
    get left() {
        return this.leftLeaf
    }
    get right() {
        return this.rightLeaf
    }
    set left(leaf) {
        this.leftLeaf=leaf
    }
    set right(leaf) {
       this.rightLeaf=leaf
    }
    set value(val){
        this.val = val
    }
    get parent() {
        return this.isRoot
    }
}
/**
* genTree(n)
* Generates random tree of height n
*/
let genTree = (n) => {
   let root = new TreeGuy(null,999)
   let currentLeaf = root
   for(let i=0; i<n; i++){
        currentLeaf.left=new TreeGuy(currentLeaf,Math.floor(Math.random()*2))
        currentLeaf.right=new TreeGuy(currentLeaf,Math.floor(Math.random()*2))
        currentLeaf = Math.floor(Math.random()*2)%2==1 ? currentLeaf.left:currentLeaf.right
   }
   return root
}

var solutionA = () => {
    var tree = genTree(5)
    var treePointer = tree
    /* TBD */
}