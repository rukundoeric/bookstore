export const createBook = book => ({
  type: 'CREATE_BOOK',
  payload: book,
});

export const deleteBook = id => ({
  type: 'DELETE_BOOK',
  payload: id,
});
