import React from 'react';
import Link from 'next/link';

export default function NavBar({ page }) {
  return (
    <div className="w-full">
      <div className="flex justify-center text-6xl">
        <Link href="/">
          <a>
            <h1 className="text-yellow-200">JOVA</h1>
          </a>
        </Link>
      </div>
      <ul className="flex flex-col md:flex-row md:justify-between pt-8 text-lg md:text-2xl text-center">
        <Link href="/">
          <a className={page === 'home' && 'font-bold text-yellow-200'}>Home</a>
        </Link>
        <Link href="/search/house">
          <a className={page === 'house' && 'font-bold text-yellow-200'}>
            Find Representatives
          </a>
        </Link>
        <Link href="/search/senate">
          <a className={page === 'senate' && 'font-bold text-yellow-200'}>
            Find Senators
          </a>
        </Link>
        <Link href="/about">
          <a className={page === 'about' && 'font-bold text-yellow-200'}>
            About
          </a>
        </Link>
      </ul>
    </div>
  );
}
