import {
  INITIALIZE_NAVIGATOR,
  TOGGLE_APP_PICKER
} from '../actions/types';

const INITIAL_STATE = {
  navigator: null,
  visible: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INITIALIZE_NAVIGATOR:
      return { ...state, navigator: action.payload };
    case TOGGLE_APP_PICKER:
      return { ...state, visible: !(state.visible) };
    default:
      return state;
  }
};
