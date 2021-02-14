import React from 'react';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>JOVA</title>
      </Head>

      <main>
        <Component {...pageProps} />
      </main>

      <footer>
        <p>Made with ❤️ 2021</p>
      </footer>
    </div>
  );
}

export default MyApp;
