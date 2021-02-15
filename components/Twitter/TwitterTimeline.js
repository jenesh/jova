import React from 'react';
import { Timeline } from 'react-twitter-widgets';

const TwitterTimeline = ({ screenName }) => {
  return (
    <>
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
    </>
  );
};

export default TwitterTimeline;
