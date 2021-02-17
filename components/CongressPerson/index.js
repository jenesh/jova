import React from 'react';
import Link from 'next/link'

const CongressPerson = ({ data }) => {

  return (
    <div>
      {data.party === 'D' ? 
      <div className ='border-blue-50'> <p>
       {data.first_name} {data.last_name} {data.state} 
      </p> 
      </div>: 
      <div className ='border-red-800'> <p>
     {data.first_name} {data.last_name} {data.state}
    </p> 
    </div>
}
    </div>
  );
};

export default CongressPerson;
