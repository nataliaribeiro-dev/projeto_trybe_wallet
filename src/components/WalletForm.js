import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { thunkExchangeRates } from '../redux/actions/index';

class WalletForm extends Component {
  state = {
    id: 0,
    value: '0',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    exchangeRates: {},

  };

  handleChanges = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleBtnClick = () => {
    const { dispatch } = this.props;

    dispatch(thunkExchangeRates(this.state));

    this.setState((prevState) => ({
      id: prevState.id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',

    }));
  };

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;

    return (
      <>

        <form>

          <label htmlFor="value">
            Valor
            <input
              type="number"
              id="value"
              data-testid="value-input"
              name="value"
              value={ value }
              onChange={ this.handleChanges }
            />
          </label>

          <label htmlFor="currency">
            Moeda
            <select
              id="currency"
              data-testid="currency-input"
              name="currency"
              onChange={ this.handleChanges }
              value={ currency }
            >
              {currencies.map((currencyy) => (
                <option
                  key={ currencyy }
                  value={ currencyy }

                >
                  {currencyy}

                </option>
              ))}
            </select>
          </label>

          <label htmlFor="method">
            Método de pagamento
            <select
              id="method"
              data-testid="method-input"
              name="method"
              value={ method }
              onChange={ this.handleChanges }

            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="tag">
            Categoria
            <select
              id="tag"
              data-testid="tag-input"
              name="tag"
              value={ tag }
              onChange={ this.handleChanges }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>

            </select>
          </label>

          <label htmlFor="description">
            Descrição
            <input
              type="text"
              id="description"
              data-testid="description-input"
              name="description"
              value={ description }
              onChange={ this.handleChanges }

            />
          </label>

          <button
            type="button"
            onClick={ this.handleBtnClick }

          >
            Adicionar despesa

          </button>
        </form>

        <div>
          <p>TESTANDO</p>
          <ul>
            <li>PARA TESTE</li>
            {' '}

          </ul>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired,

};

export default connect(mapStateToProps)(WalletForm);
