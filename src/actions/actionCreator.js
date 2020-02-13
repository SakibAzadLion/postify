export function addPost(code, desc, img) {
  return {
    type: "ADD_POST",
    code,
    desc,
    img
  };
}
