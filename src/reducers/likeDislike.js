function likeDislike(state = [], action) {
  switch (action.type) {
    case "TOOGLE_LIKE":
      if (typeof action.code !== "undefined") {
        return {
          ...state,
          [`${action.user}_${action.code}`]: {
            ...state[`${action.user}_${action.code}`],
            liked: action.liked
          }
        };
      }
    case "TOOGLE_DISLIKE":
      if (typeof action.code !== "undefined") {
        return {
          ...state,
          [`${action.user}_${action.code}`]: {
            ...state[`${action.user}_${action.code}`],
            disliked: action.disliked
          }
        };
      }
    case "REMOVE_LIKE_DISLIKE":
      if (typeof action.code !== "undefined") {
        const newState = { ...state };

        delete newState[`${action.user}_${action.code}`];

        return {
          ...newState
        };
      }
  }
  return state;
}

export default likeDislike;
