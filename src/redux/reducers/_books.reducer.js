const initialState = {
  books: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'CREATE_BOOK': {
      const res = state.books;
      res.push(payload);
      return {
        ...state,
        books: res,
      };
    }

    default:
      return state;
  }
};
