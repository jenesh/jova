import React from 'react';
import Link from 'next/link';


const CongressPerson = ({ data }) => {
  return (
    <div>
      {data.party === 'D' ? (
        <div className="border-blue-500 border-4">
          <p>
            {data.first_name} {data.last_name} {data.state}
          </p>
        </div>
      ) : (
        <div className="border-red-800 border-4">
          <p>
            {data.first_name} {data.last_name} {data.state}
          </p>
        </div>
      )}
    </div>
  );
};

export default CongressPerson;
