import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CategoryItem from '../category-item/category-item.component';
import { selectCategorySections } from '../../redux/category/category.selector';

import  './category.style.scss';

const Category = ({ sections }) => {
  return(
    <div className='category'>
    {
        sections.map(({ id, ...otherProps }) => (
            <CategoryItem key={id} {...otherProps} />
        ))
    }     
    </div>
  )
}

const mapSateToProps =  createStructuredSelector({
  sections: selectCategorySections
});

export default connect(mapSateToProps)(Category);