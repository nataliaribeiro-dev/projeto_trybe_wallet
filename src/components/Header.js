import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email } = this.props;

    // const totalValue = expenses.reduce((acc, curr) => {
    //   const exchangeRate = exchangeRates[curr.currency].ask;
    //   const value = parseFloat(curr.value);
    //   acc += value * exchangeRate;
    //   return acc;
    // }, 0).toFixed(2);

    return (
      <div>
        <p data-testid="email-field">
          E-mail:
          {' '}
          {' '}
          { email }
        </p>
        <p data-testid="total-field">
          Despesa Total:
          {' '}
          {' '}
          {/* {totalValue} */}
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,

};

export default Header;
