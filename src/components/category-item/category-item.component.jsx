import React from 'react';
import { useHistory } from "react-router-dom";

import * as ROUTES from '../../components/routes/routes.paths';

import  './category-item.style.scss';

const CategoryItem = ({ category, imageUrl, size }) => {

    const history = useHistory();

    return (
        <div className='category-item' onClick={() => history.push(`${ROUTES.SHOP}/${category}`, {category: category})}>
        <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className='content'>
                <h1 className='title'>{category}</h1>
                <span className='subtitle'>Shops</span>
            </div>
        </div>
    );
}

export default CategoryItem;