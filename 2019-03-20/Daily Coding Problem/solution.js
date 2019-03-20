/**
 * Note: 
 * The mapping for 'encoding' will be
 * a: 1
 * ...
 * z: 26
 */
const enc_map = ['a','b','c','d','e','f','g'
                  ,'h','i','j','k','l','m','n'
                  ,'o','p','q','r','s','t','u'
                  ,'v','w','x','y','z']
/**
 * SolutionA
 * Input: String of numbers
 * Output: Integer representing number of possible encodings
 * 
 * Plan: 
 * Define a dictionary or assoc. array as enc_map
 * loop through string with i as index.  
 * store str[i] + str[i+1] as a number into a temporary value
 * 
 * 
 * @params String
 * @returns Int
 */

const solutionA = (str) => {
    var tmp = 0;
    var count = 0;
    
    for(let i in str){
        tmp = str[i-1]===undefined
            ? Number(str[i])
            : Number(str[i-1]+str[i])
        if(enc_map[tmp]!==undefined)
            count++
    }
    return count
}


/**
 * solutionB
 * Input: String of numbers
 * Output: Integer representing number of possible encodings
 * 
 * Plan: 
 * iterate through str starting from end
 * 
 * @params String
 * @returns Int
 */

const solutionB = (str) => {
    var tmp = ' ';
    var count = 0;
    for(let i = str.length; i>0; i--){
        tmp = str[i-1]!==undefined
            ? str[i-1]+tmp[0]
            : tmp[0]
        if(enc_map[Number(tmp)]!==undefined)
            count++
    }
    return count
}

/**
 * solutionB
 * Input: String of numbers
 * Output: Integer representing number of possible encodings
 * 
 * Plan: 
 * recursion
 * 
 * @params String
 * @returns Int
 */
const solutionC = (str) => {
    if(str.length==1){
        return 1
    }else {
        var tmp = Number(str[str.length-2]+str[str.length-1])
        if(tmp>=0&&tmp<27){
            return solutionC(str.slice(0,str.length-1))+1
        }
        else{
            return solutionC(str.slice(0,str.length-1))
        }
    }
}

// Testing 
var t0,t1;
var input = genStr(4048);

t0 = performance.now()
solutionA(input);
t1 = performance.now()
console.log(t1-t0)

t0 = performance.now()
solutionB(input);
t1 = performance.now()
console.log(t1-t0)

t0 = performance.now()
solutionC(input);
t1 = performance.now()
console.log(t1-t0)

function genStr(size){
    if(size==1){
        return Math.floor(Math.random()*5)
    }
    return ''+genStr(size-1)+Math.floor(Math.random()*5)
}