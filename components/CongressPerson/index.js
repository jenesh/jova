import React from 'react';

const CongressPerson = ({ data }) => {
  return (
    <div>
      <p>
        {data.first_name} {data.last_name}
      </p>
    </div>
  );
};

export default CongressPerson;
