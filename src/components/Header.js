import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

class Header extends Component {
  // totalExpenses() {
  //   const { expenses } = this.props;
  //   const total = expenses.reduce((acc, curr) => {
  //     const { value, currency, exchangeRates } = curr;
  //     const exchangeRate = exchangeRates[currency].ask;
  //     const totalExpense = value * exchangeRate;
  //     return acc + totalExpense;
  //   }, 0);
  //   return total;
  // }

  render() {
    const { email } = this.props;

    return (
      <div>
        <p data-testid="email-field">
          E-mail:
          {' '}
          {' '}
          { email }
        </p>
        <p data-testid="total-field">
          Despesa Total: 0
          {' '}
          {' '}
          {/* { this.totalExpenses() } */}
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   email: state.user.email,
//   expenses: state.wallet.expenses,
// });

Header.propTypes = {
  email: PropTypes.string.isRequired,

};

export default Header;
