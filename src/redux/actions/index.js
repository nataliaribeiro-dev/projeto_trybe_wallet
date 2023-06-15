import { SAVE_EMAIL } from '../reducers/user';

export const addEmail = (email) => ({
  type: SAVE_EMAIL,
  payload: {
    email,
  },
});

export const FETCH_CURRENCIES = 'FETCH_CURRENCIES';

const fetchCurrencies = (currencies) => ({
  type: FETCH_CURRENCIES,
  payload: {
    currencies,
  },
});

export const thunkCurrencies = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const currencies = await response.json();
  delete currencies.USDT;
  dispatch(fetchCurrencies(Object.keys(currencies)));
};
