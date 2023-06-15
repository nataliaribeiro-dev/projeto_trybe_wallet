export const ADD_EMAIL = 'ADD_EMAIL';

const INITIAL_STATE = {
  user: {
    email: '', // string que armazena o email da pessoa usuária
  },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EMAIL:
    return {
      ...state,
      user: action.payload,
    };
  default:
    return state;
  }
};// Esse reducer será responsável por tratar as informações da pessoa usuária

export default userReducer;
