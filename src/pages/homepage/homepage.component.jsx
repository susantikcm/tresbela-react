import React, { useState } from 'react';

import { useFetch } from '../../effects/use-fetch.effect';

import SwipableCard from "../../components/swipable-card/swipable-card.component";
import { Item, AppContainer, ExtraInfo, Code } from "../../components/swipable-card/swipable-card-styling.js";

//import { useCarousel } from '../../components/useCarousel';

const HomePage = () => {  
    const favoriteShops = useFetch('/shop'); // should get users favorite shop

    const ShopOffers = useFetch('/shop'); // should get users favorite shop

    return (
        <div style={{ marginTop: '10px'}}>
            <h6>Favorites</h6>
            <SwipableCard title="Carousel">
                {favoriteShops && favoriteShops.map((i, shop) => {
                    var image = shop.images[0];
                    return(
                        <div key={i}>
                            <Item style={{ backgroundColor: 'white'}} />
                            <p>{shop.shopName}</p>
                        </div>
                )})}
                
                <Item img="https://unsplash.it/475/205" />
                <Item img="https://unsplash.it/476/205" />
                <Item img="https://unsplash.it/477/205" />
                <Item img="https://unsplash.it/478/205" />
                <Item img="https://unsplash.it/479/205" />
            </SwipableCard>
            <br /><br /><br /><br />
            <h6>Promotions</h6>
            <SwipableCard title="Carousel">
                {ShopOffers && ShopOffers.map((i, shop) => {
                    var image = shop.images[0];
                    return(
                        <div key={i}>
                            <Item style={{ backgroundColor: 'white'}} />
                            <p>{shop.shopName}</p>
                        </div>
                )})}
                
                <Item img="https://unsplash.it/475/205" />
                <Item img="https://unsplash.it/476/205" />
                <Item img="https://unsplash.it/477/205" />
                <Item img="https://unsplash.it/478/205" />
                <Item img="https://unsplash.it/479/205" />
            </SwipableCard>
            
        </div>
    );
}  

export default HomePage;
