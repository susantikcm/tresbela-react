import React from 'react';
import { useParams } from 'react-router-dom';

import {useFetch} from '../../effects/use-fetch.effect';
import ShopItem from '../shop-item/shop-item.component';

import './shop-collection-category.styles.scss'; 

const ShopCollectionCategory = () => {

    const { category } = useParams();
    const items = useFetch('/category/' + category);

    return(
        <div className='collection-category'>
            <h6 className='title'>{category}</h6>
            <div className='items'>
            {
                items && items.map(item => <ShopItem key={item.id} item={item} />)       
            }
            </div>
        </div>
    )
}
export default ShopCollectionCategory;