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

  handleChange = ({ target }) => {
    const key = target.name;
    let value = '';
    if (target.type === 'checkbox') {
      value = target.checked;
    } else {
      value = target.value;
    }
    this.setState({
      [key]: value,
    }, () => {
      this.handleSaveButtonDisabled();
    });
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

    if (newCard.cardTrunfo) {
      newCard.hasTrunfo = true;
      this.setState({
        hasTrunfo: true,
      });
    }

    this.setState((anterior) => ({
      cardsSaved: [...anterior.cardsSaved, newCard],
    }));

    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });
  };

  handleDelete = ({ target }) => {
    const { cardsSaved } = this.state;
    const notDeleted = cardsSaved.filter((card) => card.cardName !== target.id);
    const hasTrunfo = notDeleted.some((card) => card.cardTrunfo === true);
    this.setState({
      cardsSaved: notDeleted,
      hasTrunfo,
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
      cardsSaved,
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
        <h2>Pŕe Visualização</h2>
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          deleteBtn="false"
        />
        <h2>Baralho</h2>
        {cardsSaved?.map((card) => (
          <Card
            key={ card.cardName }
            cardName={ card.cardName }
            cardDescription={ card.cardDescription }
            cardAttr1={ card.cardAttr1 }
            cardAttr2={ card.cardAttr2 }
            cardAttr3={ card.cardAttr3 }
            cardImage={ card.cardImage }
            cardRare={ card.cardRare }
            cardTrunfo={ card.cardTrunfo }
            deleteBtn="true"
            onDeleteButtonClick={ this.handleDelete }
          />))}
      </div>
    );
  }
}

export default App;
