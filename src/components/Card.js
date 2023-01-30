import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.props;

    let trunfoCheck;
    if (cardTrunfo) {
      trunfoCheck = <section data-testid="trunfo-card">Super Trunfo</section>;
    }
    return (
      <div>
        <section>
          <h1 data-testid="name-card">{cardName}</h1>
        </section>
        <section>
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        </section>
        <section>
          <h1 data-testid="description-card">{cardDescription}</h1>
        </section>
        <section data-testid="attr1-card">
          Attr01..........
          {cardAttr1}
        </section>
        <section data-testid="attr2-card">
          Attr02..........
          {cardAttr2}
        </section>
        <section data-testid="attr3-card">
          Attr03..........
          {cardAttr3}
        </section>
        <section data-testid="rare-card">{cardRare}</section>
        {trunfoCheck}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
};

export default Card;
