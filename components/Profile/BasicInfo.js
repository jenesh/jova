import React from 'react';

const BasicInfo = ({ data }) => {
  return (
    <div className="p-16">
      <h2 className="text-5xl">
        {data.first_name} {data.last_name}
      </h2>
      <p>Date of Birth: {data.date_of_birth}</p>
      <p>Party: {data.current_party}</p>
      <p className="hover:underline">
        <a href={data.url}>{data.url}</a>
      </p>
    </div>
  );
};

export default BasicInfo;
