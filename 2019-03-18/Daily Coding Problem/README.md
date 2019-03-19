# Problem
This problem was asked by Jane Street.
cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair. For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.
Given this implementation of cons:
def cons(a, b):
    def pair(f):
        return f(a, b)
    return pair
Implement car and cdr.

## Comments
 * This problem was a little hard for me to understand...
 *  - decided to look up what the f means, found it was related to functional programming in python.
 *  - not sure what the javascript equivalent to that is... at least not yet.
 * we have this constructor that returns a pair... 
 *   is this pair an object or can we assume its a tuple or something of the likes?
 * What is f?  is that just representing some anonymous function we don't need to worry about?

## My interpretation...
 * Pair is an object that holds two objects.
 *  - Car
 *  - Cdr
 * Car and Cdr take an input of Pair Type
 *  - returns the value stored in Pair.Car and Pair.Cdr respectively
 