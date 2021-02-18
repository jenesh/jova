import React from 'react';

const BasicInfo = ({ data }) => {
  return (
    <div className="pt-16 pb-16 text-center">
      <h2 className="text-5xl">
        {data.first_name} {data.last_name}
      </h2>
      <p>Date of Birth: {data.date_of_birth}</p>
      <p>Party: {data.current_party === 'R' ? 'Republican' : 'Democrat'}</p>
      <p>
        <a className="hover:underline hover:text-blue-500" href={data.url}>
          {data.url}
        </a>
      </p>
    </div>
  );
};

export default BasicInfo;
