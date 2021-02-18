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

const SearchHouse = ({ headers }) => {
  const [houseData, setHouseData] = useState();
  const [backButton, setBackButton] = useState(false);

  const loadHouseMembers = () => {
    const house = member.getAllHouseMembers(headers);

    house.then(({ results }) => setHouseData(results[0].members));
  };

  useEffect(() => {
    loadHouseMembers();
  }, []);

  const handleSelectChange = (e) => {
    if (houseData) {
      const filteredReps = houseData.filter(
        (el) => el.state === e.target.value,
      );
      setHouseData(filteredReps);
    }
    setBackButton(!backButton);
  };

  const handleBackClick = () => {
    loadHouseMembers();
    setBackButton(false);
  };

  return (
    <div>
      <NavBar page="house" />
      <SearchForm
        handleSelectChange={handleSelectChange}
        handleBackClick={handleBackClick}
        backButton={backButton}
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
