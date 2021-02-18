import React, { useEffect, useState } from 'react';
import * as member from '../api/propublica/member';
import CongressPerson from '../../components/CongressPerson';
import NavBar from '../../components/NavBar/NavBar';
import { States } from '../../assests/localized/state';
import { headers } from '../api/propublica/headers';

export async function getServerSideProps(context) {
  const { id } = context.params;

  return {
    props: {
      id,
      headers,
    },
  };
}

const State = ({ id, headers }) => {
  const [senators, setSenators] = useState();
  const [representative, setRepresentatives] = useState();

  const filterByState = (el) => el.state === id;

  const setRepDataByState = (res) => {
    const rep = res.filter(filterByState);
    setRepresentatives(rep);
  };

  const setSenateDataByState = (res) => {
    const rep = res.filter(filterByState);
    setSenators(rep);
  };

  useEffect(() => {
    const senate = member.getAllSenateMembers(headers);
    const house = member.getAllHouseMembers(headers);
    console.log(senate);

    senate.then(({ results }) => setSenateDataByState(results[0].members));
    house.then(({ results }) => setRepDataByState(results[0].members));
  }, []);

  if (!id) return <h1>Loading...</h1>;

  return (
    <div className="">
      <div className="flex justify-center pb-6">
        <NavBar />
      </div>
      <h1 className="text-4xl pt-4 flex justify-center">{States[id]}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 pt-8">
        <div>
          <h1 className="text-xl pt-4 md:pt-0 pb-4 flex justify-center font-semibold tracking-wide">
            Senators
          </h1>
          <div className="grid grid-cols-9 pl-4 pr-4 text-sm md:text-base md:font-medium">
            <p className="col-span-4">Name</p>
            <p className="col-span-4 text-right">Next Election</p>
            <p className="col-span-1 text-right">State</p>
          </div>
          {senators
            ? senators.map((el) => {
              return <CongressPerson key={el.id} data={el} />;
            })
            : null}
        </div>
        <div>
          <h1 className="text-xl pt-4 md:pt-0 pb-4 pl-4 flex justify-center font-semibold tracking-wide">
            Representatives
          </h1>
          <div className="grid grid-cols-9 pl-4 pr-4 text-sm md:text-base md:font-medium">
            <p className="col-span-4">Name</p>
            <p className="col-span-4 text-right">Next Election</p>
            <p className="col-span-1 text-right">State</p>
          </div>
          {representative
            ? representative.map((el) => {
              return <CongressPerson key={el.id} data={el} />;
            })
            : null}
        </div>
      </div>
    </div>
  );
};

export default State;
