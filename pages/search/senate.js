import React, { useEffect, useState } from 'react';
import * as member from '../api/propublica/member';
import CongressPerson from '../../components/CongressPerson';
import SearchForm from '../../components/SearchForm';
import NavBar from '../../components/NavBar/NavBar';
import { headers } from '../api/propublica/headers';

export async function getServerSideProps() {
  return {
    props: {
      headers,
    },
  };
}

const SearchSenate = ({ headers }) => {
  const [senateData, setSenateData] = useState();
  const [searchInput, setSearchInput] = useState();
  const [backButton, setBackButton] = useState();

  const loadSenateMembers = () => {
    const senate = member.getAllSenateMembers(headers);

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
      <NavBar page="senate" />
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
          <div className="grid grid-cols-9 pl-4 pr-4 text-sm md:text-base md:font-medium">
            <p className="col-span-4">Name</p>
            <p className="col-span-4 text-right">Next Election</p>
            <p className="col-span-1 text-right">State</p>
          </div>
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
