import React, { useEffect, useState } from 'react';
import * as member from '../api/propublica/member';
import CongressPerson from '../../components/CongressPerson';
import SearchForm from '../../components/SearchForm';
import NavBar from '../../components/NavBar/NavBar';
import process from 'process';

export async function getServerSideProps() {
  const headers = {
    headers: {
      'X-API-KEY': process.env.PROPUBLICA_API_KEY,
    },
  };

  return {
    props: {
      headers,
    },
  };
}

const SearchHouse = ({ headers }) => {
  const [houseData, setHouseData] = useState();
  const [searchInput, setSearchInput] = useState();
  const [backButton, setBackButton] = useState();

  const loadHouseMembers = () => {
    const house = member.getAllHouseMembers(headers);

    house.then(({ results }) => setHouseData(results[0].members));
  };

  useEffect(() => {
    loadHouseMembers();
  }, []);

  const filterHelper = (el) =>
    el.state.toLowerCase() === searchInput.toLowerCase();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (houseData) {
      const filteredReps = houseData.filter(filterHelper);
      setHouseData(filteredReps);
      setBackButton(true);
    }
  };

  const handleBackClick = () => {
    loadHouseMembers();
    setBackButton(false);
  };

  return (
    <div>
      <NavBar page="house" />
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
          <h1>House</h1>
          {houseData ? (
            <div className="min-w-full">
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
