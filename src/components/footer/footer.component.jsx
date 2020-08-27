import React from 'react';
import { useHistory } from "react-router-dom";

import * as ROUTES from '../../components/routes/routes.paths';

import { ReactComponent as HomeIcon } from '../../assets/mansion.svg';
import { ReactComponent as CategoryIcon } from '../../assets/category.svg';
// import { ReactComponent as SettingIcon } from '../../assets/settings.svg';

//import shopCollectionAll from '../../components/shop-collection-all/shop-collection-all.component';
// import CollectionCategory from '../../components/collection-category/collection-category.component';
import Category from '../../components/category/category.component';

import './footer.style.scss';

const Footer = () => {
  
    const history = useHistory();

    return (
      <div  className='footer'>
        <div className='icon-setting'>
            Home
        </div>
        <div className='icon-setting' >
            Category
        </div>
        <div className='icon-setting'>
            Booking
        </div>
        <div className='icon-setting'>
            Account
        </div>
      </div>
    );
}

export default Footer;

//            <SettingIcon className='icons-setting'/>
