import React from 'react';
import Products from '../Products/Products';
import CartOfProduct from '../CartOfProduct/CartOfProduct';

export default class Main extends React.Component {
  state = {
    item: null,
    items: null,
  };
  getData = async () => {
    try {
      const res = await fetch(`http://localhost:3007/items`);
      const data = await res.json();
      this.setState({
        items: data.content,
        item: null,
      });
    } catch (err) {
      console.log('ERRR', err);
    }
  };
  getDataById = async (id) => {
    try {
      const res = await fetch(`http://localhost:3007/item/${id}`);
      const dataItem = await res.json();
      this.setState({
        item: dataItem.content,
        items: null,
      });
    } catch (e) {
      console.log('ERRR', e);
    }
  };
  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <>
        {this.state.items && <Products items={this.state.items} />}
        {this.state.item &&
          this.state.item.map((item) => {
            <CartOfProduct
              key={item.id}
              name={item.name}
              price={item.prise}
              id={item.id}
              like={item.like}
              picture={item.picture}
              getDataById={this.getDataById}
            />;
          })}
      </>
    );
  }
}
