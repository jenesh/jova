import React from 'react';
import { Timeline } from 'react-twitter-widgets';

const TwitterTimeline = ({ screenName }) => {
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

export default TwitterTimeline;
