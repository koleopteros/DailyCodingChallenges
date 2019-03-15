const twoSumA = (arr,k) => {
  for (let i in arr){
    for(let j in arr){
      if(i==j) continue
      else if(arr+arr==k){
        result.push(i)
        result.push(j)
      }
    }
  }
  return result
}
console.log("Solution A")
console.log(twoSumA([10,5,3,7],17))
console.log(twoSumA([10,5,2,7],15))
console.log(twoSumA([10,5,2,7],9))
console.log(twoSumA([10,5,2,7],27))
// attempt to solve using filter?
