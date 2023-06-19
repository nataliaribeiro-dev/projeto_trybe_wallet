import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;

    return (
      <div>
        <p data-testid="email-field">
          E-mail:
          {' '}
          {' '}
          { email }
        </p>
        <p data-testid="total-field">
          {expenses.reduce(
            (acc, curr) => {
              const { value, currency, exchangeRates } = curr;
              const exchangeRate = exchangeRates[currency].ask;
              const totalExpense = value * exchangeRate;
              return acc + totalExpense;
            },
            0,
          ).toFixed(2)}
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,

  }).isRequired).isRequired,
};

export default connect(mapStateToProps)(Header);
