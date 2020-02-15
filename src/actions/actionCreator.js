export function addPost(code, desc, img) {
  return {
    type: "ADD_POST",
    code,
    desc,
    img
  };
}

export function removePost(index) {
  return {
    type: "REMOVE_POST",
    index
  };
}

export function addComment(code, user, comment) {
  return {
    type: "ADD_COMMENT",
    code,
    user,
    comment
  };
}

export function removeComment(code, index) {
  return {
    type: "REMOVE_COMMENT",
    code,
    index
  };
}

export function removeCommentObj(code) {
  return {
    type: "REMOVE_COMMENT_OBJ",
    code
  };
}

export function toogleLike(code, user, index, liked) {
  return {
    type: "TOOGLE_LIKE",
    code,
    user,
    index,
    liked
  };
}

export function toogleDislike(code, user, index, disliked) {
  return {
    type: "TOOGLE_DISLIKE",
    code,
    user,
    index,
    disliked
  };
}

export function removeLikeDislike(user, code) {
  return {
    type: "REMOVE_LIKE_DISLIKE",
    user,
    code
  };
}
