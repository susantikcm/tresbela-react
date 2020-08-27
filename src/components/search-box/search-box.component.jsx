import React, { FormEvent, ChangeEvent } from 'react';

const SearchBox = ({ searchChange }) => {
    console.log('SearchBox');
    return (
        <div>
            <input 
                aria-label='Search'
                type='search' 
                placeholder='Search...'
                onChange={searchChange}
            />
        </div>
    );
}
export default SearchBox;