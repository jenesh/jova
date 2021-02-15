import React, { useState } from 'react';
import * as member from '../api/propublica/member';

const Search = () => {
  const [data, setData] = useState();

  const handleClick = () => {
    const response = member.getAllSenateMembers();

    response.then(({ results }) => setData(results[0].members));
  };

  return (
    <div>
      <h1>SEARCH ID PAGE</h1>
      <button onClick={handleClick}>GET ALL</button>
      <div>
        {data ? (
          <div>
            {data.map((el) => {
              return (
                <div key={el.id}>
                  <p>
                    {el.first_name} {el.last_name}
                  </p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      {/* <p>{data}</p> */}
    </div>
  );
};

export default Search;
