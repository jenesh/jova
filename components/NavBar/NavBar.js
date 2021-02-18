import React from 'react';
import Link from 'next/link';

export default function NavBar() {
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
          <a>Home</a>
        </Link>
        <Link href="/search/house">
          <a>Find Representatives</a>
        </Link>
        <Link href="/search/senate">
          <a>Find Senators</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </ul>
    </div>
  );
}
