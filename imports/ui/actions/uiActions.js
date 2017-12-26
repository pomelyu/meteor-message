import { OPEN_SIDE_BAR, CLOSE_SIDE_BAR } from '../constants/actionTypes.js';

export const openSideBar = () => ({
  type: OPEN_SIDE_BAR,
  payload: { showSideBar: true },
});

export const closeSideBar = () => ({
  type: CLOSE_SIDE_BAR,
  payload: { showSideBar: false },
})
