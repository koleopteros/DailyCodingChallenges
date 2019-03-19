/**
 * My Guess:
 * Cons creates a Pair Object and returns it
 * Pair is an object that holds two objects.
 *  - Car
 *  - Cdr
 * Car and Cdr take an input of Pair Type
 *  - returns the value stored in Pair.Car and Pair.Cdr respectively
 */

function Cons(a,b){
    var pair = ()=>{
        return [Car(a),Cdr(b)]
    }
    return pair()
}
function Car(pair) {
    return pair.length>1? pair[0]:pair
}
function Cdr(pair){
    return pair.length>1? pair[1]:pair
}