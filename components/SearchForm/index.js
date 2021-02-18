import React, { useEffect, useState } from 'react';

const SearchForm = ({
  handleFormSubmit,
  setSearchInput,
  backButton,
  handleBackClick,
}) => {
  return (
    <div>
      <form
        onSubmit={(e) => {
          handleFormSubmit(e);
        }}>
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          required
          placeholder="Search..."
          className="text-black"
        />
      </form>
      {backButton && <button onClick={handleBackClick}>Back to list</button>}
    </div>
  );
};

export default SearchForm;
