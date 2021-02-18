import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar.js';
import BasicInfo from '../../components/Profile/BasicInfo';
import VotingPosition from '../../components/Profile/VotingPosition.js';
import * as member from '../api/propublica/member';
import TwitterTimeline from '../../components/Twitter/TwitterTimeline';
import process from 'process';

export async function getServerSideProps(context) {
  const { id } = context.params;
  const headers = {
    headers: {
      'X-API-KEY': process.env.PROPUBLICA_API_KEY,
    },
  };

  return {
    props: {
      id,
      headers,
    },
  };
}

const Profile = ({ id }) => {
  const [votingPositions, setVotingPositions] = useState([]);
  const [memberInfo, setMemberInfo] = useState();

  useEffect(() => {
    const memberInformation = member.getMemberById(id);
    const votingPos = member.getVotingPositions(id);
    votingPos.then(({ results }) => setVotingPositions(results[0].votes));
    memberInformation.then(({ results }) => setMemberInfo(results[0]));
  }, []);

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
      <div className="flex flex-wrap items-start mt-12">
        <div>
          {renderBasicInfo()}
          <div className="grid gap-4 grid-cols-2 static">
            {votingPositions &&
              votingPositions.map((elem) => {
                return <VotingPosition key={elem.time} data={elem} />;
              })}
          </div>
        </div>
        <div>
          {memberInfo && (
            <TwitterTimeline screenName={memberInfo.twitter_account} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
