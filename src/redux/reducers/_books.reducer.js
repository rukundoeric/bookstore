const initialState = {
  books: [{
    id: 'ERI983CE',
    title: 'Story of my life',
    category: 'fiction',
  }],
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'GET_BOOKS':
      return {
        ...state,
        books: payload,
      };

    default:
      return state;
  }
};
