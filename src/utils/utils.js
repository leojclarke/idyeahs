export function findIdeaByIndex(id, posts) {
  const ideaIndex = posts.map(idea => idea.id).indexOf(id);
  return ideaIndex;
}

export function findCommentByIndex(id, comments) {
  const commentIndex = comments.map(comment => comment.id).indexOf(id);
  return commentIndex;
}

export function findStarByUsername(userName, stars) {
  const starIndex = stars.map(star => star.author.username).indexOf(userName);
  return starIndex;
}
