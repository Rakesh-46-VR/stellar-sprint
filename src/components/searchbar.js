import React from "react";
import "./searchbar.css";

const SearchBar = () => {

  return (
    <div class="search-container">
        <input type="text" placeholder="Search..."/>
        <button type="submit" className="button-search"><i className="fas fa-search"></i></button>
    </div>
  );
};

export default SearchBar;
