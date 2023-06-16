import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>

          </thead>
          {/* <tbody>
            <tr>
              <td>{descrição}</td>
              <td>{tag}</td>
              <td>{metodoPag}</td>
              <td>{valor}</td>
              <td>{moeda}</td>
              <td>{cambio}</td>
              <td>{valorConvertido}</td>
              <td>{moedaDeConversao}</td>
              <td>
                <button type="button">Editar</button>
                <button type="button">Excluir</button>
              </td>
            </tr>
          </tbody> */}

        </table>
      </div>
    );
  }
}

export default Table;
