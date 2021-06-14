import React from 'react';
import './productItem.scss';
import ButtonLike from '../ButtonLike/ButtonLike';

export class ProductItem extends React.Component {
  render() {
    return (
      <a href="/" className="item-link" onClick={() => this.props.getDataById(this.props.id)}>
        <div className="products-inner__item">
          <ButtonLike like={this.props.like}/>
          <img
            className="item__img"
            src={`http://localhost:3007${this.props.picture.path}`}
            alt={this.props.picture.alt}
          />
          <p className="item__text">{this.props.name}</p>
          <p className="item__price">{this.props.prise}</p>
        </div>
      </a>
    );
  }
}
