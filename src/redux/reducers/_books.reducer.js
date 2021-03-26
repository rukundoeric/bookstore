export default (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case 'CREATE_BOOK':
      return [
        ...state,
        { ...payload },
      ];

    default:
      return state;
  }
};
