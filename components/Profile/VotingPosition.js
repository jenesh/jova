import React from 'react'

const VotingPosition = ({data}) => {
    if(data.amendment.length > 0){
        return(
            <div className='amendment-info'>
                 <p>{data.bill.bill_id}</p>
                <h2>{data.description}</h2>
                <h3>{data.bill.title}</h3>
                <p>{data.position}</p>
                <p>{data.result}</p>
            </div>
        )
    }else{
        return (
            <>
            <div className='bill-info'>
                <p>{data.date}</p>
                <p>Bill Id:{' '}{data.bill.bill_id}</p>
                <h2>Description:{' '}{data.description}</h2>
                <h3>Title: {' '}{data.bill.title}</h3>
                <p>How Did They Vote: {' '}{data.position}</p>
                <p> Vote Result: {' '}{data.result}</p>
            </div>
            </>
        )
    }
}

export default VotingPosition