export const SAVE_EMAIL = 'SAVE_EMAIL';

const INITIAL_STATE = {
  email: '', // string que armazena o email da pessoa usuária
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_EMAIL:
    return action.payload;
  default:
    return state;
  }
};// Esse reducer será responsável por tratar as informações da pessoa usuária

export default user;
