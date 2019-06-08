export function findIdeaByIndex(id, posts) {
  const ideaIndex = posts.map(idea => idea.id).indexOf(id);
  return ideaIndex;
}
