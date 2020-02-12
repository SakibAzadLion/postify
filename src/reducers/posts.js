import store from "../store";

function posts(state = [], action) {
  switch (action.type) {
    case "ADD_POST":
      console.log("post added");
      return [...state, { code: action.code, desc: action.desc, img: action.img }];
  }
  return state;
}

export default posts;
