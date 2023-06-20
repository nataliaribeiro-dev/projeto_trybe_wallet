import { SAVE_EMAIL } from '../reducers/user';

export const FETCH_CURRENCIES = 'FETCH_CURRENCIES';
export const FETCH_EXCHANGE_RATES = 'FETCH_EXCHANGE_RATES';
export const SAVE_EXPENSES = 'SAVE_EXPENSES';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';

export const addEmail = (email) => ({
  type: SAVE_EMAIL,
  payload: {
    email,
  },
});

export const saveExpenses = (expenses) => ({
  type: SAVE_EXPENSES,
  payload: expenses,

});

const fetchCurrencies = (currencies) => ({
  type: FETCH_CURRENCIES,
  payload: {
    currencies,
  },
});

export const deleteExpense = (id) => ({
  type: DELETE_EXPENSE,
  payload: id,
});

export const editExpense = (id) => ({
  type: EDIT_EXPENSE,
  payload: id,
});

// -----------------------------THunk--------------------------------

// essa função é um thunk que serve para fazer requisições assíncronas e neste caso, ela faz uma requisição para a API e retorna um objeto com as moedas.
export const thunkCurrencies = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const currencies = await response.json();
  delete currencies.USDT;

  dispatch(fetchCurrencies(Object.keys(currencies)));
};

export const thunkExchangeRates = (expenses) => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  delete data.USDT;

  dispatch(saveExpenses({ ...expenses, exchangeRates: data }));
};
