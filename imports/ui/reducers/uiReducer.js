import { OPEN_SIDE_BAR, CLOSE_SIDE_BAR } from '../constants/actionTypes.js';
import { UiState } from '../constants/models.js';

/* eslint-disable no-use-before-define */
const uiReducer = (state = UiState, action) => {
  switch (action.type) {
  case OPEN_SIDE_BAR:
    return handleOpenSideBar(state, action.payload);
  case CLOSE_SIDE_BAR:
    return handleCloseSideBar(state, action.payload);
  default:
    return state;
  }
};
/* eslint-enable no-use-before-define */


function handleOpenSideBar(state, payload) {
  return state.set('showSideBar', payload.showSideBar)
}

function handleCloseSideBar(state, payload) {
  return state.set('showSideBar', payload.showSideBar)
}

export default uiReducer;
