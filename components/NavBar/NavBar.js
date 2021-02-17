import React from "react";
import Link from 'next/link'

export default function NavBar() {
  return (
    <div>
        <div>
      <ul>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/">
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
    </div>
  );
}

