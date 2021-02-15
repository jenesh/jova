import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import MapChart from '../components/Maps/MapChart';

export default function Home() {
  return (
    <div>
      <MapChart />
    </div>
  );
}
