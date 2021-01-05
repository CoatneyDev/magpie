
# Welcome To Magpie!
- `Created: Dec 29, 2020`
- `Last Updated: Jan 5, 2021`

Magpie is a project created to demo my pet frontend/angular techniques.
The theme of the project is Puzzles!

The techniques I want to highlight are:
1. Complex string manipulation 
2. Sorting/Searching massive amounts of info (dictionary)
3. RESTful api use
4. Serverless architecture
5. Use of Git, Angular 10 (TS/JS, CSS/SCSS, HTML), Ionic 5, NgRx, Firebase/Firestore
6. Complexity evaluation
7. Optimization strategies

I'll use these techniques in puzzles and puzzle solving, such as the popular puzzle books. These include word lookups, word games, ciphers, mazes, crosswords etc.

1. [x] Word Search <br />
    &nbsp;&nbsp;&nbsp;x Palindrome finder <br />
    &nbsp;&nbsp;&nbsp;x Anagram finder <br />
    &nbsp;&nbsp;&nbsp;- Word Definitions <br />

2. [ ] Ciphers <br />
    &nbsp;&nbsp;&nbsp;- RotX  <br />
    &nbsp;&nbsp;&nbsp;- Playfair <br />

3. [ ] Mazes

4. [ ] Crossword Puzzles

## Complexity & Optimization 
The Anagram search is a good illustration of performance issues and the tradeoff between space and time. Here is our problem:

We have a dictionary implemented as a key/value pair, with the key being the letter of the alphabet and the array being words beginning with that letter. This is implemented as an Object, which is a Hashtable
in JS. Performance of lookup (also search, delete, insert) is Constant O(1). This helps us scan the dictionary for words, but it causes a problem in anagram search:

We have a word such as 'cinema' and we take each letter of the alphabet one at a time and examine each word under that letter one at a time. This is a quadratic performance time O(n^2) requireing nested loops. This is not scalable, so we can't perform this lookup each time the user searches for a word.

We can solve that problem by creating a hash, and storing the hash as the key of an array of words
(which are anagrams of it and each other) inside the dictionary itself. 

`'aceimn': ['iceman','cinema','anemic']`

Our application compiles the dictionary containing our anagram/hash pairs only every time we add a word to the dictionary. This gives us the same O(1) Constant Time performance for lookup as we have with a
dictionary lookup, but creates a space complexity tradeoff.So we have good time. But our dictionary is large. If we add other languages to search we can build a
fast app but we are taking on a lot of bulk. 


## Fun Word Searches...

### Anagrams which are also Palindromes:

`'add': ['add', 'dad']`

### Anagrams

`'aceimn': ['iceman','cinema','anemic']`

### Palindromes

`'level': ['level']`



Puzzle Solving tools:
1. [x] Anagram finder
2. [x] Palindrome identifier
3. [ ] Internationalization: English, French, Czech, Spanish, Latin, Greek word finder
4. [ ] Playfair cipher decription 
<br />
... more to come

Puzzles:
1. [ ] Maze Generator
2. [ ] Crossword Maker


# Resources
