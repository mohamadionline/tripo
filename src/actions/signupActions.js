export default {
  updatePhone(payload) {
    return {
      type: 'UPDATE_SIGNUP_PHONE',
      payload,
    };
  },
  updateLocation(payload) {
    return {
      type: 'UPDATE_SIGNUP_LOCATION',
      payload,
    };
  },
  updateAddress(payload) {
    return {
      type: 'UPDATE_SIGNUP_ADDRESS',
      payload,
    };
  },
  updateDoneButtonState(payload) {
    return {
      type: 'UPDATE_SIGNUP_DONE_BUTTON_STATE',
      payload,
    };
  },
};
