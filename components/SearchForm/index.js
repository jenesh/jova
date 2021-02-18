import React, { useEffect, useState } from 'react';

const SearchForm = ({
  handleFormSubmit,
  setSearchInput,
  backButton,
  handleBackClick,
}) => {
  return (
    <div className="pt-8 pb-4">
      <form
        onSubmit={(e) => {
          handleFormSubmit(e);
        }}
        className="flex justify-center">
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          required
          placeholder="Search by State..."
          className="text-black w-96 p-1 pl-4 pr-4"
        />
      </form>
      {backButton && <button onClick={handleBackClick}>Back to list</button>}
    </div>
  );
};

export default SearchForm;
