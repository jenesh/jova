import React from 'react';
import Link from 'next/link';


const CongressPerson = ({ data }) => {
  return (
    <div>
      {data.party === 'D' ? (
        <div className="border-blue-500 border-4">
          <Link href={`/profile/${data.id}`}>
            <p>
              {data.first_name} {data.last_name} {data.state}
            </p>
          </Link>
        </div>
      ) : (
        <div className="border-red-800 border-4">
          <Link href={`/profile/${data.id}`}>
            <p>
              {data.first_name} {data.last_name} {data.state}
            </p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CongressPerson;
