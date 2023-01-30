import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <section>
        <h1> Adicione Nova Carta </h1>
        <label htmlFor="name">
          Nome:
          <input
            data-testid="name-input"
            type="text"
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <textarea data-testid="description-input" />
        </label>
        <label htmlFor="number1">
          Attr01:
          <input
            data-testid="attr1-input"
            type="number"
          />
        </label>
        <label htmlFor="number2">
          Attr02:
          <input
            data-testid="attr2-input"
            type="number"
          />
        </label>
        <label htmlFor="number3">
          Attr03:
          <input
            data-testid="attr3-input"
            type="number"
          />
        </label>
        <label htmlFor="image">
          Imagem:
          <input
            data-testid="image-input"
            type="text"
          />
        </label>
        <label htmlFor="rare">
          Raridade:
          <select name="rare" data-testid="irare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          <input
            data-testid="trunfo-input"
            type="checkbox"
          />
          Super Trybe Trunfo
        </label>
        <button data-testid="save-button">Salvar</button>
      </section>
    );
  }
}

export default Form;
