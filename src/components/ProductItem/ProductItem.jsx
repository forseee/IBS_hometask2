import React from 'react';
import style from './productItem.module.scss';
import ButtonLike from '../ButtonLike/ButtonLike';
import { Link } from 'react-router-dom';

export const ProductItem = (props) => {
  return (
    <Link to={{ pathname: '/item', search: `?id=${props.id}` }} className="item-link">
      <div className={style.inner}>
        <ButtonLike like={props.like} />
        <img
          className={style.item__img}
          src={`http://localhost:3006${props.picturePatch}`}
          alt={props.pictureAlt}
        />
        <p className={style.item__text}>{props.name}</p>
        <p className={style.item__price}>${props.price}</p>
      </div>
    </Link>
  );
};
