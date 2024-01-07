import { SET_STAND_TO_FAVORITE, REMOVE_STAND_FROM_FAVORITE } from '../constants/actionTypes';

export const setStandToFavorite = (id) => ({
  type: SET_STAND_TO_FAVORITE,
  payload: {
    id,
  },
});

export const removeStandFromFavorite = (id) => ({
  type: REMOVE_STAND_FROM_FAVORITE,
  payload: {
    id,
  },
});
