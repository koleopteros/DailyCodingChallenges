# Problem
This problem was asked by Google.

A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.

Given the root to a binary tree, count the number of unival subtrees.

For example, the following tree has 5 unival subtrees:

   0
  / \
 1   0
    / \
   1   0
  / \
 1   1

 ## Comments
 A little confused how to count the number of subtrees...

 from the Daily Coding Problem they have the following. (almost the same)
   a
 / \
c   b
    /\
   b  b
        \
         b

c being one subtree, i understand, but why does each of the b's count as a subtree?

I guess I sort of understand, but I feel that there is some gap of knowledge on how to view these subtrees