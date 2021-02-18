import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar.js';
import BasicInfo from '../../components/Profile/BasicInfo';
import VotingPosition from '../../components/Profile/VotingPosition.js';
import * as member from '../api/propublica/member';

//need to get member Id from the route props

export async function getServerSideProps(context) {
  const { id } = context.params;

  return {
    props: {
      id,
    },
  };
}

const Profile = ({ id }) => {
  const [votingPositions, setVotingPositions] = useState([]);
  const [memberInfo, setMemberInfo] = useState();

  useEffect(() => {
    const memberInformation = member.getMemberById(id);
    const votingPos = member.getVotingPositions(id);
    votingPos.then(({ results }) => filterAndSetVotingPositions(results[0].votes));
    memberInformation.then(({ results }) => setMemberInfo(results[0]));
  }, []);

  const filterAndSetVotingPositions = (votingPositions) => {
   let obj = {}
   let newArr =[]
   for(let i = 0; i < votingPositions.length; i++){
       if(!obj[votingPositions[i].bill.bill_id]){
            newArr.push(votingPositions[i])
       }
       obj[votingPositions[i].bill.bill_id] = votingPositions[i]
   }
   setVotingPositions(newArr)
   return newArr
  }
  
  const renderBasicInfo = () => {
    if (memberInfo) {
      return <BasicInfo data={memberInfo} />;
    }
    return <div></div>;
  };
  if (!id) return <h1> Loading...</h1>;

  return (
    <div>
      <NavBar />
      {renderBasicInfo()}
      {votingPositions
        ? votingPositions.map((elem) => {
            return <VotingPosition key={elem.time} data={elem} />;
          })
        : null}
    </div>
  );
};

export default Profile;
