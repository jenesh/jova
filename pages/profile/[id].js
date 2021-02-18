import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar.js';
import BasicInfo from '../../components/Profile/BasicInfo';
import VotingPosition from '../../components/Profile/VotingPosition.js';
import * as member from '../api/propublica/member';
import TwitterTimeline from '../../components/Twitter/TwitterTimeline';
import { headers } from '../api/propublica/headers';

export async function getServerSideProps(context) {
  const { id } = context.params;

  return {
    props: {
      id,
      headers,
    },
  };
}

const Profile = ({ id, headers }) => {
  const [votingPositions, setVotingPositions] = useState([]);
  const [memberInfo, setMemberInfo] = useState();

  useEffect(() => {
    const memberInformation = member.getMemberById(id, headers);
    const votingPos = member.getVotingPositions(id, headers);
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
      <div>
        {renderBasicInfo()}
        <div className="grid grid-cols-1 lg:grid-cols-1 text-center">
          {memberInfo && (
            <div className="row-span-2 bg-white-500 pb-16">
              <TwitterTimeline screenName={memberInfo.twitter_account} />
            </div>
          )}
          <div className="">
            {votingPositions &&
              votingPositions.map((elem) => {
                return <VotingPosition key={elem.time} data={elem} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
