import React, { useEffect, useMemo } from 'react';
import { ProductItem } from '../../components/ProductItem/ProductItem';
import './products.scss';
import { useActions } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IItem } from '../../models/post';

export const Products = () => {
  const {
    data: { items, filter },
  } = useTypedSelector((state) => state);
  const dispatch = useActions();

  const filteredItem = useMemo(
    () =>
      (items).filter((item: IItem) => item.name.toLowerCase().includes(filter.toLowerCase())),
    [items, filter],
  );

  useEffect(() => {
    dispatch.data__getProducts();
  }, [dispatch]);

  if (!items) return <div>Loading...</div>;
  return (
    <div className="product__items">
      <div className="conteiner">
        <div className="products-inner">
          {filteredItem.map((item) => {
            return (
              <ProductItem
                key={item.id}
                name={item.name}
                price={item.price.value}
                id={item.id}
                like={item.like}
                picturePatch={item.picture.path}
                pictureAlt={item.picture.alt}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
