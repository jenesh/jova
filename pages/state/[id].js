import React from 'react';
export async function getServerSideProps(context) {
  const { id } = context.params;

  return {
    props: {
      id,
    },
  };
}

const State = ({ id }) => {
  if (!id) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export default State;
