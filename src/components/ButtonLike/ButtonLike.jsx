import React from 'react';
import likeImg from '../img/favorite.svg';
import dislikeImg from '../img/favorite_border.svg';

export default class ButtonLike extends React.Component {
  render() {
    return (
      <button className="basket__like-btn">
        <img className="basket__like-img" src={this.props.like ? likeImg : dislikeImg} alt="/"/>
      </button>
    );
  }
}
