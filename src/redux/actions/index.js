import { ADD_EMAIL } from '../reducers/user';

const addEmail = (email) => ({
  type: ADD_EMAIL,
  payload: {
    email,
  },
});

export default addEmail;
