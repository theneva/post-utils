// 1. Import the test subject(s); two sorting functions in this case
import { Post, sortByTitle, sortByLength } from './post-utils';

// 2. Create a few items
const rabbits: Post = {
  title: 'Rabbits',
  content: 'This is a post about rabbits'
};

const dogs: Post = {
  title: 'Dogs',
  content: 'Dogs are great. Shiba Inus in particular.'
};

const frogs: Post = {
  title: 'Frogs',
  content:
    "Frogs are pretty cool. There is one in the video for Vampire Weekend's new song 2021."
};

// 3. Put them all into a list for testing
const posts: Post[] = [dogs, rabbits, frogs];

// 4. Run each function, and construct new arrays with expected output
// for equality comparison
test('sort by title', () => {
  const result = sortByTitle(posts);
  const sortedByTitle = [dogs, frogs, rabbits];
  expect(result).toEqual(sortedByTitle);
});

test('sort by length', () => {
  const result = sortByLength(posts);
  const sortedByLength = [rabbits, dogs, frogs];
  expect(result).toEqual(sortedByLength);
});
