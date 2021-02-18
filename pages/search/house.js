import React, { useEffect, useState } from 'react';
import * as member from '../api/propublica/member';
import CongressPerson from '../../components/CongressPerson';
import SearchForm from '../../components/SearchForm';
import NavBar from '../../components/NavBar/NavBar';

const SearchHouse = () => {
  const [houseData, setHouseData] = useState();
  const [searchInput, setSearchInput] = useState();
  const [backButton, setBackButton] = useState();

  const loadCongressMembers = () => {
    const house = member.getAllHouseMembers();

    house.then(({ results }) => setHouseData(results[0].members));
  };

  useEffect(() => {
    loadCongressMembers();
  }, []);

  const filterHelper = (el) =>
    el.state.toLowerCase() === searchInput.toLowerCase();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (houseData) {
      const filteredReps = houseData.filter(filterHelper);
      const filteredSenate = senateData.filter(filterHelper);
      setHouseData(filteredReps);
      setBackButton(true);
    }
  };

  const handleBackClick = () => {
    loadCongressMembers();
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
        <div>
          <h1>House</h1>
          {houseData ? (
            <div>
              {houseData.map((el) => {
                return <CongressPerson key={el.id} data={el} />;
              })}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SearchHouse;
