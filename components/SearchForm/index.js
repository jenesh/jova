import React, { useEffect, useState } from 'react';
import mapData from '../../assests/localized/mapData.json';

const SearchForm = ({
  handleSelectChange,
  backButton,
  handleBackClick,
  searchInput,
}) => {
  return (
    <div className="pt-8 pb-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex justify-center">
        <select
          value={searchInput}
          className="text-black w-96 p-1 pl-4 pr-4"
          onChange={handleSelectChange}>
          {mapData.map((el) => {
            return (
              el.name && (
                <option key={el.abreviation} value={el.abreviation}>
                  {el.name}
                </option>
              )
            );
          })}
        </select>
        {backButton && (
          <button onClick={handleBackClick} className="pl-1">
            Back to list
          </button>
        )}
      </form>
    </div>
  );
};

export default SearchForm;
