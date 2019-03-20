# Problem

This problem was asked by Facebook.

Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

You can assume that the messages are decodable. For example, '001' is not allowed.

## Algorithm testing

solutionA and solutionB used the same concept and relatively the same implementation.  However, from tests on the console using the inputs below, starting at the beginning of the array appears to be significantly slower.

solutionB was much more consistent in timing, whereas solutionA had large variations.

Is this related to for-in?

solutionC used recursion that could probably use some optimising, but my results were relatively close to solutionA.  Perhaps for-in uses some kind of recursion?

input: string of 0-9, length of 4048

#### Timing:
##### solutionA (ms) FOR IN: 
1.1000000014901161, 1.4999999981373549, 1.2000000020489097, 1.2999999998137355, 1.3999999975785613, 1.1000000014901161, 1.3999999975785613, 1.2999999998137355, 1.0999999977648258, 1.2999999998137355
##### solutionB (ms) For loop, reversed:
1, 0.4000000013038516, 0.49999999813735485, 0.4000000013038516, 0.40000000037252903, 0.599999999627471, 0.40000000037252903, 0.40000000037252903, 0.6000000024214387, 0.5000000018626451
##### solutionC (ms) RECURSION:
0.49999999813735485, 1.4999999981373549, 0.599999999627471, 0.5000000018626451, 1.4999999990686774, 0.599999999627471, 0.5000000027939677, 1.599999999627471, 0.4999999990686774, 0.4999999990686774