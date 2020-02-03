function changeState(action) {
  return action.payload;
}

export default (state = null, action) => {
  switch (action.type) {
    case 'UPDATE-PAGE':
      return changeState(action);
    default:
      return state;
  }
};
