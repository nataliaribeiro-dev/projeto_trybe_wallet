import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import addEmail from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  // lidar com as mudanças dos inputs
  handleChanges = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  // lidar com o submit, salvar o email no estado global e redirecionar para a página de carteira
  handleSubmit = (event) => {
    event.preventDefault();
    const { history, dispatch } = this.props;
    const { email } = this.state;
    dispatch(addEmail(email));
    history.push('/carteira');
  };

  // verificar se o botão deve estar habilitado ou não, validando o email e a senha
  buttonDisabled = () => {
    const { email, password } = this.state;
    const minLength = 6;
    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    return !regexEmail.test(email) || password.length < minLength;
  };

  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
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

// export default usando o connect do react-redux para conectar o componente ao estado global
export default connect()(Login);
