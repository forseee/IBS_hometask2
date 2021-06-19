import React from 'react';
import likeImg from '../../assets/img/favorite.svg';
import dislikeImg from '../../assets/img/favorite_border.svg';
import style from './buttonLike.module.scss';

export default class ButtonLike extends React.Component {
  render() {
    return (
      <button className={style.btn}>
        <img className="btn_like" src={this.props.like ? likeImg : dislikeImg} alt="/" />
      </button>
    );
  }
}
