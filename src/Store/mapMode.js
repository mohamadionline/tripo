export default (state = null, action) => {
  switch (action.type) {
    case 'UPDATE-MAP-MODE':
      return action.payload;
    default:
      return state;
  }
};
