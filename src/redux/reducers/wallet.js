import { FETCH_CURRENCIES, SAVE_EXPENSES,
  DELETE_EXPENSE, EDIT_EXPENSE } from '../actions';

const INITIAL_STATE = {

  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada

};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_CURRENCIES:
    return {
      ...state,
      currencies: action.payload.currencies,
    };

  case SAVE_EXPENSES: {
    return {
      ...state,
      expenses: [...state.expenses, { ...action.payload }],
    };
  }

  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.payload),
    };

  case EDIT_EXPENSE:
    return {
      ...state,
      editor: true,
      idToEdit: action.payload,
    };

  default:
    return state;
  }
};

export default wallet;
