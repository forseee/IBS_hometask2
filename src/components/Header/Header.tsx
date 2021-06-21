import React from 'react';
import './header.scss';
import img1 from '../../assets/img/shopping_cart.svg';
import img2 from '../../assets/img/account_circle.svg';
import { useState } from 'react';
import { useActions } from '../../hooks/useAction';

const Header = () => {
  const [input, setInput] = useState('');
  const dispatch = useActions();
  const handleChange = (e: any) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch.app__filterProductsByName(input);
  };

  return (
    <>
      <header>
        <div className="conteiner">
          <div className="header">
            <form onSubmit={handleSubmit}>
              <input
                className="header__search"
                onChange={handleChange}
                placeholder="Search products"
                value={input}
                type="text"
              />
            </form>
            <div className="header__items">
              <a className="header__item-link" href="/">
                <img className="header__item-img" src={img1} alt="cartimg" />
              </a>
              <a className="header__item-link" href="/">
                <img className="header__item-img" src={img2} alt="accauntimg" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
