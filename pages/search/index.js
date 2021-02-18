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

const Search = ({ headers }) => {
  const [senateData, setSenateData] = useState();
  const [houseData, setHouseData] = useState();
  const [searchInput, setSearchInput] = useState();
  const [backButton, setBackButton] = useState();

  const loadCongressMembers = () => {
    const senate = member.getAllSenateMembers();
    const house = member.getAllHouseMembers();

    senate.then(({ results }) => setSenateData(results[0].members));
    house.then(({ results }) => setHouseData(results[0].members));
  };

  useEffect(() => {
    loadCongressMembers();
  }, []);

  const filterHelper = (el) =>
    el.state.toLowerCase() === searchInput.toLowerCase();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (senateData && houseData) {
      const filteredReps = houseData.filter(filterHelper);
      const filteredSenate = senateData.filter(filterHelper);
      setHouseData(filteredReps);
      setSenateData(filteredSenate);
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
          <h1>Senate</h1>
          {senateData ? (
            <div>
              {senateData.map((el) => {
                return <CongressPerson key={el.id} data={el} />;
              })}
            </div>
          ) : null}
        </div>
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

export default Search;
