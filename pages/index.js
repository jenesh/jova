import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import MapChart from './maps/MapChart';

export default function Home() {
  const [stateName, setStateName] = useState();
  
  if (stateName) {
    console.log('state name:', stateName);
  }
  
  return (
    <div>
      <MapChart setStateName={setStateName} />
    </div>
  );
}
