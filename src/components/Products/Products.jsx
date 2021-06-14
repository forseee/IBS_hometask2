import React from 'react';
import { ProductItem } from '../ProductItem/ProductItem';
import './products.scss'

export default class Products extends React.Component {
  render() {
    return (
      <div className="product__items">
        <div className="conteiner">
          <div className="products-inner">
            {this.props.items.map((item) => {
              <ProductItem
                key={item.id}
                name={item.name}
                price={item.prise}
                id={item.id}
                like={item.like}
                picture={item.picture}
                getDataById={this.getDataById}
              />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
