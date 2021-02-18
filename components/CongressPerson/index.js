import React from 'react';
import Link from 'next/link';

const CongressPerson = ({ data }) => {
  const { first_name, last_name, state, next_election, short_title } = data;
  console.log(data);
  return (
    <div className="w-full">
      {data.party === 'D' ? (
        <Link href={`/profile/${data.id}`}>
          <a className="border-blue-500 border-4 p-2 m-1 hover:bg-blue-500 grid grid-cols-8">
            <p className="col-span-4">
              {short_title} {first_name} {last_name}
            </p>
            <p className="text-right col-span-3">{next_election}</p>
            <p className="text-right">{state} </p>
          </a>
        </Link>
      ) : (
        <Link href={`/profile/${data.id}`}>
          <a className="border-red-700 border-4 p-2 m-1 hover:bg-red-700 grid grid-cols-8">
            <p className="col-span-4">
              {short_title} {first_name} {last_name}
            </p>
            <p className="text-right col-span-3">{next_election}</p>
            <p className="text-right">{state} </p>
          </a>
        </Link>
      )}
    </div>
  );
};

export default CongressPerson;
