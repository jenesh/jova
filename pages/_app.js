import React from 'react';
import Head from 'next/head';
import '../styles/globals.css';
import '../styles/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="mx-auto pt-12 pl-32 pr-32 bg-black m-0 text-white min-h-screen">
      <Head>
        <title>JOVA</title>
      </Head>

      <main>
        <div className="container">
          <Component {...pageProps} />
        </div>
      </main>

      <footer className="flex justify-center content-center pt-6">
        <p>Made with ❤️ 2021</p>
      </footer>
    </div>
  );
}

export default MyApp;
