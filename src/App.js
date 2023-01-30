import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    cardsSaved: [],
  };

  handleSaveButtonDisabled = () => {
    const { cardName, cardDescription, cardImage, cardRare, cardAttr1, cardAttr2,
      cardAttr3 } = this.state;
    const infoArray = [cardName, cardDescription, cardImage, cardRare];
    const numberArray = [Math.floor(cardAttr1),
      Math.floor(cardAttr2), Math.floor(cardAttr3)];
    const maxAttr = 90;
    const maxTotal = 210;
    if (infoArray.some((info) => info === '')
    || numberArray.some((info) => Math.floor(info) > maxAttr)
    || numberArray.some((info) => Math.floor(info) < 0)
    || numberArray.reduce((acc, cur) => acc + cur, 0) > maxTotal) {
      this.setState({
        isSaveButtonDisabled: true,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: false,
      });
    }
  };

  handleChange = (event) => {
    const key = event.target.name;
    let value = '';
    if (event.target.type === 'checkbox') {
      value = event.target.checked;
    } else {
      value = event.target.value;
    }
    this.setState({
      [key]: value,
    }, () => this.handleSaveButtonDisabled());
  };

  handleButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      cardsSaved,
    } = this.state;
    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    };
    this.setState({
      cardsSaved: [...cardsSaved, newCard],
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
    });
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.handleButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
