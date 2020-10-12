import React from 'react'
import './search.css'

const Search = ({ handleOnChange }) => (
    <input
        className="input-search"
        type="search"
        placeholder="Search dogs..."
        aria-label="Search"
        onChange={handleOnChange}
    />
)

export default Search
