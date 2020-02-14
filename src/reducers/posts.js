import store from "../store";

function posts(state = [], action) {
  const i = action.index;
  switch (action.type) {
    case "ADD_POST":
      console.log("post added");
      return [
        ...state,
        {
          code: action.code,
          desc: action.desc,
          img: action.img,
          liked: action.liked,
          disliked: action.disliked
        }
      ];
    case "REMOVE_POST":
      return [...state.slice(0, i), ...state.slice(i + 1)];
  }
  return state;
}

export default posts;
