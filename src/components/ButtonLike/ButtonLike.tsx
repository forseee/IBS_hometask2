import React from 'react';
import likeImg from '../../assets/img/favorite.svg';
import dislikeImg from '../../assets/img/favorite_border.svg';
import style from './buttonLike.module.scss';
import { useActions } from '../../hooks/useAction';

type PropsType = {
  like: Boolean;
  id: string;
};

export const ButtonLike: React.FC<PropsType> = ({ like, id }) => {
  const dispatch = useActions();
  const handleClick = (e: any) => {
    dispatch.app__LikeDisLike(id);
  };
  return (
    <button onClick={(e) => handleClick(e)} className={style.btn}>
      <img className="btn_like" src={like ? likeImg : dislikeImg} alt="/" />
    </button>
  );
};
