import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import addEmail from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleChanges = ({ target }) => {
    const { name, value, type } = target;
    const { dispatch } = this.props;
    if (type === 'email') {
      dispatch(addEmail(value));
    }
    this.setState({ [name]: value });
  };

  buttonDisabled = () => {
    const { email, password } = this.state;
    const minLength = 6;
    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    return !regexEmail.test(email) || password.length < minLength;
  };

  render() {
    const { history } = this.props;
    return (
      <div>
        <form>
          <input
            type="email"
            name="email"
            onChange={ this.handleChanges }
            placeholder="E-mail"
            data-testid="email-input"
          />
          <input
            type="password"
            name="password"
            onChange={ this.handleChanges }
            placeholder="Senha"
            data-testid="password-input"
          />
          <button
            type="submit"
            onClick={ () => history.push('/carteira') }
            disabled={ this.buttonDisabled() }
          >
            Entrar

          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect()(Login);
