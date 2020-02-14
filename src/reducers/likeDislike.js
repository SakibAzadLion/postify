function likeDislike(state = [], action) {
  switch (action.type) {
    case "TOOGLE_LIKE":
      if (typeof action.code !== "undefined") {
        return {
          ...state,
          [`${action.user}_${action.code}`]: {...state[`${action.user}_${action.code}`], liked: action.liked}
        };    
      }
    case "TOOGLE_DISLIKE":
      if (typeof action.code !== "undefined") {
        return {
          ...state,
          [`${action.user}_${action.code}`]: {...state[`${action.user}_${action.code}`], disliked: action.disliked}
        };     
      }
  }
  return state;
}

export default likeDislike;
