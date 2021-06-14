import React from 'react';
import './cartOfProduct.scss';
import ButtonLike from '../ButtonLike/ButtonLike';
import ButtonPlusMinus from '../ButtonPlusMinus/ButtonPlusMinus';

export default class CartOfProduct extends React.Component {
  render() {
    return (
      <div className="basket">
        <div className="conteiner">
          <div className="basket__items">
            <div className="basket__item">
              <div className="basket__item-img-wrapper">
                <img
                  src={`http://localhost:3007${this.props.picture.path}`}
                  alt="img"
                  className="basket__img"
                />
              </div>
              <div className="basket__item-description">
                <h3 className="basket__item-title">{this.props.name}</h3>
                <p className="basket__item-text">{this.props.text}</p>
                <h4 className="basket__item-subtitle">Details</h4>
                <p className="basket__item-text">{this.props.text}</p>
                <div className="basket__item-menu">
                  <p className="basket__item-prise">${this.props.price}</p>
                  <ButtonPlusMinus />
                  <ButtonLike />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
