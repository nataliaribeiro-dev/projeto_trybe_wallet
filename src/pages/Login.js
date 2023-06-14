import React from 'react';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isBtnDisabled: true,
  };

  handleChanges = ({ target }) => {
    const { name, value } = target;
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

export default Login;
