import store from "../store";

function postComments(state = [], action) {
  const i = action.index;
  switch (action.type) {
    case "ADD_COMMENT":
      // return the new state with the new comment
      return [...state, { user: action.user, text: action.comment }];
    case "REMOVE_COMMENT":
      return [...state.slice(0, i), ...state.slice(i + 1)];
  }

  return state;
}

function comments(state = [], action) {
  switch (action.type) {
    case "REMOVE_COMMENT_OBJ":
      const newState = { ...state };
      delete newState[action.code];

      return {
        ...newState
      };

      break;
    default:
      if (typeof action.code !== "undefined") {
        return {
          //Take the current state
          ...state,
          //Overwrite this post with a new one
          [action.code]: postComments(state[action.code], action)
        };
      }
  }

  return state;
}

export default comments;
