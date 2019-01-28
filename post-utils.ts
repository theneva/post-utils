export type Post = {
  title: string;
  content: string;
};

export function sortByTitle(posts: Post[]) {
  const copy = [...posts];
  return copy.sort((left, right) => left.title.localeCompare(right.title));
}

export function sortByLength(posts: Post[]) {
  const copy = [...posts];
  return copy.sort((left, right) => left.content.length - right.content.length);
}
