import React from 'react';
import Link from 'next/link';

const CongressPerson = ({ data }) => {
  return (
    <div>
      {data.party === 'D' ? (
        <div className="border-blue-600 border-4 hover:bg-blue-600">
          <Link href={`/profile/${data.id}`}>
            <p>
              {data.first_name} {data.last_name} {data.state}
            </p>
          </Link>
        </div>
      ) : (
        <div className="border-red-600 border-4 hover:bg-red-600">
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
