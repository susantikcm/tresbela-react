import React from 'react';
import { useHistory } from "react-router-dom";

import * as ROUTES from '../routes/routes.paths';

// import Carousel from '../../../components/carousel/carousel.component';
// import Slider from '../../../components/slider/slider.component';

import  './shop-item.style.scss';

const ShopItem= ({ item }) => {

    const history = useHistory();

    return (
        <div key={item.id} className="card shop-card" style={{ backgroundColor: 'white'}}>
            {/* <Carousel key={index} slides={shop.images ? shop.images : [] } />
            <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" role="img"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
            <div className='card-image' style={{ backgroundImage: `url(${imageUrl})` }} /> */}
            <div className="card-body">
                <div className="card-text">
                    <p>
                        {item.shopName} <br />
                        {item.address} <br />
                        {item.phone} <br />
                        {item.businessTypes && item.businessTypes.map((businessType, i) => <span key={i}> {businessType} </span>)}
                    </p>
                </div>
                <button style={{ backgroundColor: 'white', borderRadius: '5px'}} onClick={() => history.push(`${ROUTES.SHOP}${ROUTES.UPDATE}/${item.id}`, {id: item.id})}>Edit</button>
                <button style={{ backgroundColor: 'white', borderRadius: '5px'}} onClick={() => history.push(`${ROUTES.SHOP}${ROUTES.DETAILS}/${item.id}`, {id: item.id})}>Details</button>
                </div>
            <div className="card-footer">
            </div>
        </div>
    )
}

export default ShopItem;