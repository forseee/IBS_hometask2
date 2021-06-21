import React, { useState } from 'react';
import imgMinus from '../../assets/img/remove.svg';
import imgPlus from '../../assets/img/add.svg';
import style from './buttonPlusMinus.module.scss';

export const ButtonPlusMinus = () => {
  const [count, setCount] = useState(0);
  const clickMinus = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className={style.basket_btns}>
      <div className={style.btn__one}>
        <button className={style.btn__minus} onClick={() => clickMinus()}>
          <img className={style.btn__img} src={imgMinus} alt="img" />
        </button>
        <input className={style.btn__input} type="number" value={count} />
        <button className={style.btn__plus} onClick={() => setCount(count + 1)}>
          <img className={style.btn__img} src={imgPlus} alt="img" />
        </button>
      </div>
      <button className={style.basket__btn_add}>Add to cart</button>
    </div>
  );
};
