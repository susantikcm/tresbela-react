import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import * as ROUTES from '../../../components/routes/routes.paths';

import ShopCollectionAll from '../../../components/shop-collection-all/shop-collection-all.component';
import ShopCollectionCategory from '../../../components/shop-collection-category/shop-collection-category.component';

const ShopList = () => {
    const { path } = useRouteMatch();
    
    return(
        <div className='shop-page'>
        <Switch>
            <Route path={`${path}${ROUTES.LIST}`} component={ShopCollectionAll} />
            <Route path={`${path}/:category`} component={ShopCollectionCategory} />
        </Switch>
        </div>
    );
}

export default ShopList;
 