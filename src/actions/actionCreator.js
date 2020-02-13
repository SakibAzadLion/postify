export function addPost(code, desc, img) {
  return {
    type: "ADD_POST",
    code,
    desc,
    img
  };
}

export function addComment(code, user, comment) {
    return {
        type: "ADD_COMMENT",
        code,
        user,
        comment
    }
}