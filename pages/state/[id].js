import React, { useEffect, useState } from 'react';
import * as member from '../api/propublica/member';
import CongressPerson from '../../components/CongressPerson';
import NavBar from '../../components/NavBar/NavBar';

export async function getServerSideProps(context) {
  const { id } = context.params;

  return {
    props: {
      id,
    },
  };
}

const State = ({ id }) => {
  const [senators, setSenators] = useState();
  const [representative, setRepresentatives] = useState();

  const setRepDataByState = (res) => {
    const t = res.filter((el) => el.state === id);
    setRepresentatives(t);
  };

  useEffect(() => {
    const senate = member.getSenateMemberByState(id);
    const house = member.getAllHouseMembers();

    senate.then(({ results }) => setSenators(results));
    house.then(({ results }) => setRepDataByState(results[0].members));
  }, []);

  if (!id) return <h1>Loading...</h1>;

  return (
    <div>
      <div className="flex  justify-center">
        <NavBar />
      </div>
      <h1>{id}</h1>
      <div>
        <div>
          <h1>Senators</h1>
          {senators
            ? senators.map((el) => {
                return <CongressPerson key={el.id} data={el} />;
              })
            : null}
        </div>
        <div>
          <h1>Representatives</h1>
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
