import _ from 'lodash';

export default (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case 'CREATE_BOOK':
      return [
        ...state,
        { ...payload },
      ];

    case 'DELETE_BOOK': {
      _.remove(state, book => book.id === payload);
      return [
        ...state,
      ];
    }

    default:
      return state;
  }
};
