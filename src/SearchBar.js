import React from 'react';

export default function SearchBar(props) {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search..."
                value={props.searchTerm}
                onChange={(event) => {
                    props.setSearchTerm(event.target.value);
                }}
            />
            <button onClick={props.filterProducts}>Search</button>
        </div>
    );
}