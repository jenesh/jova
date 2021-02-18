import React, { useEffect, useState } from 'react';
import * as member from '../api/propublica/member';
import CongressPerson from '../../components/CongressPerson';
import SearchForm from '../../components/SearchForm';
import NavBar from '../../components/NavBar/NavBar';

const SearchSenate = () => {
  const [senateData, setSenateData] = useState();
  const [searchInput, setSearchInput] = useState();
  const [backButton, setBackButton] = useState();

  const loadSenateMembers = () => {
    const senate = member.getAllSenateMembers();

    senate.then(({ results }) => setSenateData(results[0].members));
  };

  useEffect(() => {
    loadSenateMembers();
  }, []);

  const filterHelper = (el) =>
    el.state.toLowerCase() === searchInput.toLowerCase();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (senateData) {
      const filteredSenate = senateData.filter(filterHelper);
      setSenateData(filteredSenate);
      setBackButton(true);
    }
  };

  const handleBackClick = () => {
    loadSenateMembers();
    setBackButton(false);
  };

  return (
    <div>
      <NavBar />
      <h1>Congress</h1>
      <SearchForm
        handleFormSubmit={handleFormSubmit}
        setSearchInput={setSearchInput}
        backButton={backButton}
        handleBackClick={handleBackClick}
      />
      <div
        style={{
          display: 'flex',
        }}>
        <div className="min-w-full">
          <h1>Senate</h1>
          {senateData ? (
            <div className="min-w-full">
              {senateData.map((el) => {
                return <CongressPerson key={el.id} data={el} />;
              })}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SearchSenate;
