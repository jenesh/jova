import React, {useEffect, useState} from 'react'  
import VotingPosition from '../../components/Profile/VotingPosition.js'
import * as member from '../api/propublica/member'

//need to get member Id from the route props

export async function getServerSideProps(context){
    const { id } = context.params;

    return {
        props: {
            id,
        },
    };
}

const Profile = ({ id }) => {
    const [votingPositions, setVotingPositions] = useState()

    useEffect( async () => {
        console.log( member.getVotingPositions('K000388'))
        const votingPositions = member.getVotingPositions('K00038')
        votingPositions.then(({ results }) => setVotingPositions(results[0].votes));
    }, [])

    if(!id) return <h1> Loading...</h1>

    return(
        <div>
            <h1>Profile</h1>
            
            {votingPositions
               ? votingPositions.map((elem) => {
                   return <VotingPosition key={elem.id} data={elem}/>
               }) 
            : null}
        </div>
    )
}

export default Profile