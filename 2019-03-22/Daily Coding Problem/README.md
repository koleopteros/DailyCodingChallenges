# Problem
This problem was asked by Airbnb.

Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

Follow-up: Can you do this in O(N) time and constant space?

## Comments
This was labelled Hard, but the concept seems relatively easy.

My initial idea was, find the largest number first and then start looking at n+1 distance away from it...

Using the [2,4,6,2,5] example, start at 6 (largest, i=2).  start looking at i-2 location and i+2 location.  Since it is only length 5, it is a little short to visualize and I guess I could be lucky with my attempt.

say i have... [5,1,2,7,5,2,7,4,3,6,7].
IF length is 3, return the greater indexes 0 + 2 and index 1.

view the array in snippets of length 4.
loop i=0...length
create snippet from i...i+3
    sort snippet, find largest value and get index as j
    if j>=2, 
        check += sum of array[j] + array[j-2..0]
    else (if j is 0 or 1)
        check += sum of array[j] + array[j+2..3]
    if i+4 > length
        return check
    if index 3 was ever used, 
        next snippet will start from i+5
    else
        next snippet will start from i+4