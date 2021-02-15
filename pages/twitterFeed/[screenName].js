import React from 'react';
import TwitterTimeline from '../../components/Twitter/TwitterTimeline';

export async function getServerSideProps(context) {
  return {
    props: {
      screenName: context.params.screenName,
    },
  };
}

const TwitterFeed = ({ screenName }) => {
  if (!screenName) return <h1>Loading...</h1>;

  return (
    <div>
      <TwitterTimeline screenName={screenName} />
    </div>
  );
};

export default TwitterFeed;
