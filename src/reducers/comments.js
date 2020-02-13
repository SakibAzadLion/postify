import store from "../store";

function postComments(state = [], action) {
  switch (action.type) {
    case "ADD_COMMENT":
      // return the new state with the new comment
      return [...state, { user: action.user, text: action.comment }];
  }
  console.log(state, action);
  return state;
}

function comments(state = [], action) {
  if (typeof action.code !== "undefined") {
    return {
      //Take the current state
      ...state,
      //Overwrite this post with a new one
      [action.code]: postComments(state[action.code], action)
    };
  }
  return state;
}

export default comments;
