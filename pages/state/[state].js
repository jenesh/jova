import React from 'react';
export async function getServerSideProps(context) {
  const { state } = context.params;
  return {
    props: {
      state,
    },
  };
}

const State = ({ state }) => {
  if (!state) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>{state}</h1>
    </div>
  );
};

export default State;
