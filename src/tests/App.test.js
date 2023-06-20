import { screen, act } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';

describe('Teste o componente <App.js />', () => {
  test('Verifica se a página principal é renderizada no caminho de URL /', () => {
    renderWithRouterAndRedux(<App />);
    const { pathname } = window.location;
    expect(pathname).toBe('/');
  });

  test('Verifica se a página de login é renderizada corretamente', () => {
    const { store } = renderWithRouterAndRedux(<App />, { initialEntries: ['/'] });
    const login = screen.getByPlaceholderText('E-mail');
    expect(login).toBeInTheDocument();

    const password = screen.getByPlaceholderText('Senha');
    expect(password).toBeInTheDocument();

    const button = screen.getByText('Entrar');
    expect(button).toBeInTheDocument();

    act(() => {
      userEvent.type(login, 'test@test.com');
      userEvent.type(password, '123456');
      userEvent.click(button);
    });

    expect(store.getState().user.email).toEqual('test@test.com');
  });

  test('Verifica se o componente Header é renderizado corretamente', () => {
    renderWithRouterAndRedux(<Header />, { initialEntries: ['/carteira'] });

    const email = screen.getByTestId('email-field');
    expect(email).toBeInTheDocument();

    const totalValue = screen.getByTestId('total-field');
    expect(totalValue).toBeInTheDocument();

    const headerCurrency = screen.getByText('BRL');
    expect(headerCurrency).toBeInTheDocument();
  });

  test('Verifica se o componente WalletForm é renderizado corretamente', () => {
    renderWithRouterAndRedux(<WalletForm />, { initialEntries: ['/carteira'] });

    const value = screen.getByLabelText('Valor');
    expect(value).toBeInTheDocument();

    const description = screen.getByLabelText('Descrição');
    expect(description).toBeInTheDocument();

    const currency = screen.getByLabelText('Moeda');
    expect(currency).toBeInTheDocument();

    const method = screen.getByLabelText('Método de pagamento');
    expect(method).toBeInTheDocument();

    const tag = screen.getByLabelText('Categoria');
    expect(tag).toBeInTheDocument();

    const addExpenseBtn = screen.getByText('Adicionar despesa');
    expect(addExpenseBtn).toBeInTheDocument();
  });
});
