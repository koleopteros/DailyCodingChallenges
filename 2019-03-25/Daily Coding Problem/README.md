# Problem
This problem was asked by Amazon.

There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time. Given N, write a function that returns the number of unique ways you can climb the staircase. The order of the steps matters.

For example, if N is 4, then there are 5 unique ways:

1, 1, 1, 1
2, 1, 1
1, 2, 1
1, 1, 2
2, 2
What if, instead of being able to climb 1 or 2 steps at a time, you could climb any number from a set of positive integers X? For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time.

## Comment
Seems like a binary tree kind of problem.

could use left and right as 1 or 2.

Step 1: build tree structure and generator
create the root which will not count to any value.  
Left will represent 1, Right will represent 2.

The data structure could easily be adapted to accomodate the 1,3,5 steps at a time (Or at least, that is what I think)


### Alternative ideas

I could also try doing half, then mirror the results?
i.e.
get easiest paths
1, 1, 1, 1
2,2
then get paths inbetween up to the halfway mark?
2, 1, 1
1, 2, 1  (exclude palidromes)
reverse them,
1,1,2

another... (odd count)
1,1,1,1,1,1,1
bottom stack:
2,2,2,1
2,2,1,2
reverse for the other two iterations
the inbetween:
1,1,1,1,1,2
1,1,1,1,2,1
1,1,1,2,1,1
hit halfway mark, so reverse for the complimenting sets
1,1,1,2,2
1,1,2,2,1
hit halfway mark, reverse again
1,2,2,2
already reached halfway, and reverse again.
and done.
