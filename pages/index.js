import React from 'react';
import Link from 'next/link'
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import MapChart from '../components/Maps/MapChart';

export default function Home() {
  return (
    <div>
      <div className='header'>
        <h1>JOVA</h1>
          <Link href="/">
            <a>Home</a>
          </Link>
          {" "}
          <Link href="/search">
            <a>Find Congresspeople</a>
          </Link>
          {" "}
          <Link href="/about">
            <a>About Us</a>
          </Link>
      </div>
      <MapChart />
    </div>
  );
}
