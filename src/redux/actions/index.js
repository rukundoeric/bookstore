/* eslint-disable import/prefer-default-export */

export const createBook = book => ({
  type: 'CREATE_BOOK',
  payload: book,
});
