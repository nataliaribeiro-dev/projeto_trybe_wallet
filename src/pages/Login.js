import React from 'react';
import { connect } from 'react-redux';
import addEmail from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isBtnDisabled: true,
  };

  handleChanges = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
    // const { dispatch } = this.props;
    // dispatch(addEmail(value));
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
            type="button"
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

export default connect()(Login);
