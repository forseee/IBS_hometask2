import React from 'react';
import './header.scss';
import img1 from "../img/shopping_cart.svg" 
import img2 from "../img/account_circle.svg" 


class Header extends React.Component {
  render() {
    return (
      <>
        <header>
          <div className="conteiner">
            <div className="header">
              <input className="header__search" type="text" placeholder="Search products" />
              <div className="header__items">
                <a className="header__item-link" href="/">
                  <img className="header__item-img" src={img1} alt="cartimg" />
                </a>
                <a className="header__item-link" href="/">
                  <img
                    className="header__item-img"
                    src={img2}
                    alt="accauntimg"
                  />
                </a>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
