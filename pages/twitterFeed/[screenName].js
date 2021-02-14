import React from 'react';
import { Timeline } from 'react-twitter-widgets';
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
      <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName,
        }}
        options={{
          height: '750',
          width: '700',
        }}
      />
    </div>
  );
};

export default TwitterFeed;