import React from 'react';
import { Timeline } from 'react-twitter-widgets';

const TwitterTimeline = ({ screenName }) => {
  return (
    <div className="w-1/3 absolute right-5 top-72 h-full">
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
