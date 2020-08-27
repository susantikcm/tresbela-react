import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectAll = createSelector(
    [selectShop],
    shop => shop.shops
);

//convert object data into array
export const selectShopArray = createSelector(
    [selectAll],
    shopCollections => Object.keys(shopCollections).map(key => shopCollections[key])
    //Object.keys(collections) returns the array of keys of the collections object => [barber, saloon, nails, ...]
    //then map each key with collections[key] to get the corresponding item with matching key inside collections object
);

export const selectShopByCategory = category => createSelector(
    [selectAll],
    shopCollections => shopCollections[category]
    // collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionId])
);

export const selectIsLoading = createSelector(
    [selectShop],
    shop => shop.isLoading
);

export const selectError = createSelector(
    [selectShop],
    shop => shop.error
);
