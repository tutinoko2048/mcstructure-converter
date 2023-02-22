import React from 'react';
import Head from 'next/head';

export default class Test extends React.Component {
  
  render() {
    return (
      <>
        <Head>
          <title>test page</title>
        </Head>
        <main>
        Hello world!
        </main>
      </>
    )
  }
}