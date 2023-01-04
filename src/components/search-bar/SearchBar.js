import React, { useState } from "react";
import "./SearchBar.scoped.scss"

const SearchBar = (props) => {
  const [inputValue, setInputValue] = useState("");

  /**
     * Method to handle search input value 
     * @param {*} event - input event
     */
  const handleInputValue = (event) => {
    setInputValue(event.target.value);
    props.search(event.target.value)
  }

  return(
    <div className='searchBar'>
      <div className='search-bar-container border border-primary'>
        <i className='bi bi-search search-icon mr-1' />
        <input className='searchBarInput' id='search-bar-input-field' value={inputValue} placeholder="Search" onChange={handleInputValue} />
      </div>
    </div>
  )
}

export default SearchBar