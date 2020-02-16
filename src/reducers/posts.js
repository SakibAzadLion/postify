import store from "../store";

function posts(state = [], action) {
  const i = action.index;
  switch (action.type) {
    case "ADD_POST":
      console.log("post added");
      return [
        ...state,
        {
          user: action.user,
          code: action.code,
          desc: action.desc,
          img: action.img,
          liked: action.liked,
          disliked: action.disliked,
          date: action.date
        }
      ];
    case "REMOVE_POST":
      return [...state.slice(0, i), ...state.slice(i + 1)];
  }
  return state;
}

export default posts;
