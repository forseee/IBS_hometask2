import React, { useEffect } from 'react';
import './cartOfProduct.scss';
import ButtonLike from '../../components/ButtonLike/ButtonLike';
import ButtonPlusMinus from '../../components/ButtonPlusMinus/ButtonPlusMinus';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useAction';
import { useLocation } from 'react-router-dom';

export const CartOfProduct = () => {
  const {
    data: { item },
  } = useTypedSelector((state) => state);
  const { data__getProductById } = useActions();
  let location = useLocation();
  let id = location.search.slice(4);
  console.log(id);
  useEffect(() => {
    data__getProductById(id);
  }, []);

  if (!item) return <div>Loading...</div>;
  return (
    <div className="basket">
      <div className="conteiner">
        <div className="basket__items">
          <div className="basket__item">
            <div className="basket__item-img-wrapper">
              <img
                src={`http://localhost:3006${item.picture.path}`}
                alt={`${item.picture.alt}`}
                className="basket__img"
              />
            </div>
            <div className="basket__item-description">
              <h3 className="basket__item-title">{item.name}</h3>
              <p className="basket__item-text">{item.info}</p>
              <h4 className="basket__item-subtitle">Details</h4>
              <p className="basket__item-text">{item.details}</p>
              <div className="basket__item-menu">
                <p className="basket__item-prise">${item.price.value}</p>
                <ButtonPlusMinus />
                <ButtonLike like={item.like} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
