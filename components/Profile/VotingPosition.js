import React from 'react';

const VotingPosition = ({ data }) => {
  if ((data.amendment.length > 0) && data.bill.bill_id) {
    return (
      <div className="amendment-info" >
        <p>{data.date}</p>
        <p>Bill Id: {data.bill.bill_id}</p>
        <h2>Bill Description: {data.description}</h2>
        <h3>Bill Title: {data.bill.title}</h3>
        <p>Voting Position: {data.position}</p>
        <p> Vote Result: {data.result}</p>
      </div>
    );
  } else {
    return (
      <div>
        {data.bill.bill_id && (
          <div className="bill-info">
            <p>{data.date}</p>
            <p>Bill Id: {data.bill.bill_id}</p>
            <h2>Bill Description: {data.description}</h2>
            <h3>Bill Title: {data.bill.title}</h3>
            <p>Voting Position: {data.position}</p>
            <p> Vote Result: {data.result}</p>
          </div>
        )}
      </div>
    );
  }
};

export default VotingPosition;
