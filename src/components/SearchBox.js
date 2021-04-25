import React from 'react';

const SearchBox = ({onSearchChange}) => {
    return(
        <div style={{marginBottom:'10px'}}>
        <input className="pa3 ba b--grenn bg-lightest-blue" placeholder="search robots" type="search" onChange={onSearchChange} />
        </div>
    )
}

export default SearchBox;