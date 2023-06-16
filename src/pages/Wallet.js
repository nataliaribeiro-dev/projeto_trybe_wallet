import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import { thunkCurrencies } from '../redux/actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        {' '}
        TrybeWallet

        <Header
          email={ email }
        />

        <WalletForm />
      </div>
    );
  }
}

// mapeia o estado global para a propriedade email
const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = {
  fetchCurrencies: thunkCurrencies,
};

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  fetchCurrencies: PropTypes.func.isRequired,

};

// conecta o componente com o estado global
export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
