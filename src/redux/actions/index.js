import { SAVE_EMAIL } from '../reducers/user';

const addEmail = (email) => ({
  type: SAVE_EMAIL,
  payload: {
    email,
  },
});

export default addEmail;
