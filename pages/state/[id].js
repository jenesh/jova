import React, { useEffect, useState } from 'react';
import * as member from '../api/propublica/member';
import Link from 'next/link';

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

  useEffect(() => {
    const senate = member.getSenateMemberByState(id);

    senate.then(({ results }) => setSenators(results));
  }, []);

  if (!id) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>{id}</h1>
      <div>
        {senators
          ? senators.map((el) => {
              return (
                <div key={el.id}>
                  <p>{el.name}</p>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default State;
