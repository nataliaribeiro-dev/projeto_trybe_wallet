import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        {' '}
        TrybeWallet

        <Header
          email={ email }
        />
      </div>
    );
  }
}

// mapeia o estado global para a propriedade email
const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

// conecta o componente com o estado global
export default connect(mapStateToProps)(Wallet);
