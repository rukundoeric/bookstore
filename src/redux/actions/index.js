/* eslint-disable import/prefer-default-export */

export const createBook = book => dispatch => {
  dispatch({
    type: 'CREATE_BOOK',
    payload: book,
  });
};
