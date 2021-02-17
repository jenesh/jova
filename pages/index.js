import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import MapChart from '../components/Maps/MapChart';
import NavBar from '../components/NavBar/NavBar';

export default function Home() {
  return (
    <div>
      <div className="">

        <div className="flex  justify-center">
          <NavBar />
        </div>
      </div>
      <MapChart />
    </div>
  );
}
