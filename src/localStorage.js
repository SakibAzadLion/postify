export const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem("postifystate");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem("postifystate", serializedState);
  } catch (err) {
    console.log(err);
  }
};
