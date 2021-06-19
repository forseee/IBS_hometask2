import React from 'react';
import imgMinus from '../../assets/img/remove.svg';
import imgPlus from '../../assets/img/add.svg';

export default class ButtonLike extends React.Component {
  render() {
    return (
      <div className="basket_btns">
        <div className="btn__one">
          <button className="btn__minus">
            <img className="btn__img" src={imgMinus} alt="img" />
          </button>
          <input type="number" className="btn__input" />
          <button className="btn__plus">
            <img className="btn__img" src={imgPlus} alt="img" />
          </button>
        </div>
        <button className="basket__btn-add">Add to cart</button>
      </div>
    );
  }
}
