import React from 'react';
import style from './productItem.module.scss';
import { ButtonLike } from '../ButtonLike/ButtonLike';
import { Link } from 'react-router-dom';

export const URL = 'http://localhost:3006';
type PropsType = {
  id: string;
  like: boolean;
  picturePatch: string;
  pictureAlt: string;
  name: string;
  price: number;
};

export const ProductItem: React.FC<PropsType> = ({
  id,
  like,
  name,
  price,
  pictureAlt,
  picturePatch,
}) => {
  return (
    <div className="item-link">
      <div className={style.inner}>
        <ButtonLike like={like} id ={id}/>
        <Link to={{ pathname: '/item', search: `?id=${id}` }}>
          <img className={style.item__img} src={`${URL}${picturePatch}`} alt={pictureAlt} />
        </Link>
        <Link to={{ pathname: '/item', search: `?id=${id}` }}>
          <p className={style.item__text}>{name}</p>
        </Link>
        <p className={style.item__price}>${price}</p>
      </div>
    </div>
  );
};
