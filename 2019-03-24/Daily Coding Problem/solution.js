/**
 * Predefined dictionary of 6 words per starting character from a to c
 * Maybe I could implement some method to pull from an online source...?
 */
const words = {
    'a': ['ache','add','ago','apple','arrow','atlatl'],
    'b': ['bark','beef','beer','beet','borg','buff'],
    'c': ['car','cat','category','ceiling','crotch','croquette'],
}
/**
 * SolutionA
 * @params string
 * @returns [string]
 */
const solutionA = (str) => {
    let results = []
    for(var list in words){
        results = words[list].filter((x)=>{
            return str === x.substr(0,str.length)
        })
    }
    return results
}