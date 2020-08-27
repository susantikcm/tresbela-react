const INITAL_STATE = {
  sections: [
    {
      category: 'Barber',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      linkUrl: '/barber'
    },
    {
      category: 'Hair Saloon',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      linkUrl: '/hair-saloon'
    },
    {
      category: 'Body Hair',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 3,
      linkUrl: '/body-hair'
    },
    {
      category: 'Face Hair',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 4,
      linkUrl: '/face-hair'
    },
    {
      category: 'Skin Care',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 5,
      linkUrl: '/skin-care'
    },
    {
      category: 'Nails',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 6,
      linkUrl: '/nails'
    },
    {
      category: 'Brow & Lash',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 7,
      linkUrl: '/brow-and-lash'
    },
    {
      category: 'Massage',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 8,
      linkUrl: '/massage'
    },
    {
      category: 'Other',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 9,
      linkUrl: '/other'
    }
  ]
}

const categoryReducer = (state=INITAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
} 
export default categoryReducer;