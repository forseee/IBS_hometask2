import React from 'react';

export default class ButtonLike extends React.Component {
  render() {
    return (
      <div className="basket_btns">
        <div className="btn__one">
          <button className="btn__minus">
            <img className="btn__img" src="./img/remove.svg" alt="img" />
          </button>
          <input type="number" className="btn__input" />
          <button className="btn__plus">
            <img className="btn__img" src="./img/add.svg" alt="img" />
          </button>
        </div>
        <button className="basket__btn-add">Add to cart</button>
      </div>
    );
  }
}
