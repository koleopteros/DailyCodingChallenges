const a = (arr,k) => {
  let sums = []
  let success = false
  while(!success){
  	for(let val of arr){
      //get all possible sums
   	  sums.push(arr.map(x=>x+val))
    }
    sums.forEach((row) =>{
      success = success || row.indexOf(k)!=-1
    })
    return success
  }
}
console.log('testing solution a...')
console.log(a([10,5,2,7],17))
console.log(a([10,5,2,7],15))
console.log(a([10,5,2,7],9))
console.log(a([10,5,2,7],27))

//single pass?
const b = (arr,k) => {
  let success = false
  for(let val of arr){
    //get all possible sums
    success = success||arr.map(x=>x+val).indexOf(k)!=-1
  }
  return success
}
console.log('testing solution b...')
console.log(b([10,5,2,7],17))
console.log(b([10,5,2,7],15))
console.log(b([10,5,2,7],27))
console.log(b([10,5,2,7],8))
