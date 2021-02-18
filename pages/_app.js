import React from 'react';
import Head from 'next/head';
import '../styles/globals.css';
import '../styles/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="mx-auto pt-8 pl-16 pr-16 md:pt-12 md:pl-32 md:pr-32 bg-black m-0 text-white min-h-screen">
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
