import React from 'react';
import Link from 'next/link';

const CongressPerson = ({ data }) => {
  return (
    <div className="w-full">
      {data.party === 'D' ? (
        <Link href={`/profile/${data.id}`}>
          <a className="border-blue-500 border-4 p-2 m-1 hover:bg-blue-500 grid">
            {data.first_name} {data.last_name} {data.state}
          </a>
        </Link>
      ) : (
        <Link href={`/profile/${data.id}`}>
          <a className="border-red-700 border-4 p-2 m-1 hover:bg-red-700 grid">
            {data.first_name} {data.last_name} {data.state}
          </a>
        </Link>
      )}
    </div>
  );
};

export default CongressPerson;
