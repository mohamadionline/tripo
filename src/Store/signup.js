export default (
  state = { phone_number: '', location: null, address: null, doneButtonState: false },
  action
) => {
  switch (action.type) {
    case 'UPDATE_SIGNUP_PHONE':
      return { ...state, phone_number: action.payload };
    case 'UPDATE_SIGNUP_LOCATION':
      return { ...state, location: action.payload };
    case 'UPDATE_SIGNUP_ADDRESS':
      return { ...state, address: action.payload };
    case 'UPDATE_SIGNUP_DONE_BUTTON_STATE':
      return { ...state, doneButtonState: action.payload };
    default:
      return state;
  }
};
