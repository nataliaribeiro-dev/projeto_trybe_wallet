import { SAVE_EMAIL } from '../reducers/user';

export const SAVE_EXPENSES = 'SAVE_EXPENSES';

export const addEmail = (email) => ({
  type: SAVE_EMAIL,
  payload: {
    email,
  },
});

export const saveExpenses = (expenses) => ({
  type: SAVE_EXPENSES,
  payload: {
    expenses,
  },
});

export const FETCH_CURRENCIES = 'FETCH_CURRENCIES';
export const FETCH_EXCHANGE_RATES = 'FETCH_EXCHANGE_RATES';

const fetchCurrencies = (currencies) => ({
  type: FETCH_CURRENCIES,
  payload: {
    currencies,
  },
});

const fetchExchangeRates = (exchangeRates) => ({
  type: FETCH_EXCHANGE_RATES,
  payload: {
    exchangeRates,
  },
});

// essa função é um thunk que serve para fazer requisições assíncronas e neste caso, ela faz uma requisição para a API e retorna um objeto com as moedas.
export const thunkCurrencies = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const currencies = await response.json();
  delete currencies.USDT;

  dispatch(fetchCurrencies(Object.keys(currencies)));
};

export const thunkExchangeRates = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const currencies = await response.json();
  delete currencies.USDT;

  const exchangeRates = Object.keys(currencies).map((currency) => ({
    [currency]: {

      code: currencies[currency].code,
      ask: currencies[currency].ask,
      name: currencies[currency].name,

    },
  }));

  dispatch(fetchExchangeRates(exchangeRates));
};
