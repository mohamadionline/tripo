export default (state = true, action) => {
  switch (action.type) {
    case 'UPDATE_MAP_RENDER':
      return action.payload;
    default:
      return state;
  }
};
