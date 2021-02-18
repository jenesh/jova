import React from 'react';

const BasicInfo = ({ data }) => {
  return (
    <div>
      <h2>
        {data.first_name} {data.last_name}
      </h2>
      <p>Date of Birth: {data.date_of_birth}</p>
      <p>Party: {data.current_party}</p>
      <p className="hover:underline">
        <a href={data.url} >{data.url}</a>
      </p>
      <a href={data.rss_url}>{data.rss_url}</a>
    </div>
  );
};

export default BasicInfo;
