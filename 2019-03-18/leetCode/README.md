# Problem
Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.

Return the quotient after dividing dividend by divisor.

The integer division should truncate toward zero.

## Comments
Seems like a relatively easy question.  I suppose the solution could be easy, but the challenge would be how fast I could make it...

From my two solutions, using the while loop always resulted in longer processes as expected.

## Implementation
#### Testing of solutions
##### Test value: 
dividend = 19866753, divisor = 2
##### Solution A results (ms):
 9.905, 7.565, 10.59, 12.62, 7.915
##### Solution B results (ms):
 7.395, 7.025, 8.965, 6.94, 7.13

#### Easy solution
create a counter
while dividend is greater than the divisor, subtract dividend by divisor, then increment counter

#### Recursive Solution (FASTER!)
Set up return value of 1 if dividend > divisor
else, return self(dividend-divisor, divisor)

