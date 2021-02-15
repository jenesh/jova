import React from 'react';
import * as member from '../api/propublica/member';

export async function getStaticProps() {
  const url = `https://dog.ceo/api/breeds/image/random`;
  const response = await fetch(url);
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}

const Search = ({ data }) => {
  // const data = fetchData();
  // console.log(data)
  const handleClick = async () => {
    const data = await member.getAllSenateMembers();
    console.log(data);
  }

  if (!data) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>SEARCH ID PAGE</h1>
      <button onClick={handleClick}>GET ALL</button>
      {/* <p>{data}</p> */}
    </div>
  );
};

export default Search;
