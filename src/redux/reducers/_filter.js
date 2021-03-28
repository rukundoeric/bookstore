export default (state = { filter: 'All' }, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'CHANGE_FILTER':
      return {
        ...state,
        filter: payload,
      };

    default:
      return state;
  }
};
