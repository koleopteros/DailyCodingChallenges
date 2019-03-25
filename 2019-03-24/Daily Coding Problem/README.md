# Problem

This problem was asked by Twitter.

Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.

For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].

Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.

## Comment
I will assume the dictionary of words is predetermined from some accessible source.

I suppose my solution will just be a function that takes in a string value, and just do soem sort of .filter function.