import React from 'react';
import Link from 'next/link';
import NavBar from '../components/NavBar/NavBar';
export default function About() {
  return (
    <div>
      <NavBar />
      <h1> About page! </h1>
      <h2> Mission Statement:</h2>
      <p>
        {' '}
        [NAME OF APPLICATION] purpose is to keep the public informed and updated
        with their current represenatives in the United States. etc...{' '}
      </p>
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
}
