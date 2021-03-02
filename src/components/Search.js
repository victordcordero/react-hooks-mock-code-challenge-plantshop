import React, { useState } from "react"

function Search({search, onSetSearch}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={search}
        onChange={(e) => onSetSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
