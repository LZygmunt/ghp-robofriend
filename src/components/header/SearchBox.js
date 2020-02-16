import React from 'react';

const SearchBox = ({ searchField, handleChange }) => {
  return (
    <div className="pa2">
      <input
        type="search"
        placeholder="search robots"
        className="pa3 ba b--green bg-lightest-blue"
        onChange={ handleChange }
      />
    </div>
  );
};

export default SearchBox;
