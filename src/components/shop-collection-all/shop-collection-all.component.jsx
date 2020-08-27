import React from "react";

import { useFetch } from '../../effects/use-fetch.effect';
import ShopItem from '../shop-item/shop-item.component';

import "./shop-collection-all.styles.scss";

const ShopCollectionAll = () => {
  
  const items = useFetch('/shop');

  return (
      <div className="card-deck">
      {
        items && items.map(item => <ShopItem key={item.id} item={item} /> )
      }
    </div>
  );
};

export default ShopCollectionAll;
