import React from 'react';

const VotingPosition = ({ data }) => {
  const className =
    'amendment-info rounded-lg border-gray-300 border-2 w-96 overFlow-auto overflow-x-scroll h-52';
  if (Object.values(data.amendment).length !== 0 && data.bill.bill_id) {
    return (
      <div className={className}>
        <p>{data.date}</p>
        <p>Bill Id: {data.bill.bill_id}</p>
        <h2>Bill Description: {data.description}</h2>
        <h3>Bill Title: {data.bill.title}</h3>
        <h3>Voting: {data.question}</h3>
        <p>Voting Position: {data.position}</p>
        <p> Vote Result: {data.result}</p>
        <p>
          YES {data.total.yes} NO {data.total.no} PRESENT: {data.total.present}{' '}
          NOT VOTING: {data.total.not_voting}
        </p>
      </div>
    );
  } else if (Object.keys(data.bill).length === 0) {
    return (
      <div className={className}>
        <p>{data.date}</p>
        <h3>Bill Title: {data.question}</h3>
        <p>Voting Position: {data.position}</p>
        <p> Vote Result: {data.result}</p>
        <p>
          YES {data.total.yes} NO {data.total.no} PRESENT: {data.total.present}{' '}
          NOT VOTING: {data.total.not_voting}
        </p>
      </div>
    );
  }

  return (
    <div>
      {Object.values(data.bill).length !== 0 && data.bill.bill_id && (
        <div className={className}>
          <p>{data.date}</p>
          <p>Bill Id: {data.bill.bill_id}</p>
          <h2>Bill Description: {data.description}</h2>
          <h3>Bill Title: {data.bill.title}</h3>
          <h3>Voting: {data.question}</h3>
          <p>Voting Position: {data.position}</p>
          <p> Vote Result: {data.result}</p>
          <p>
            YES {data.total.yes} NO {data.total.no} PRESENT:{' '}
            {data.total.present} NOT VOTING: {data.total.not_voting}
          </p>
        </div>
      )}
    </div>
  );
};

export default VotingPosition;
