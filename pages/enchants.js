import React from 'react';
import Head from 'next/head';
import Header from './Header';

export default function testPage() {
  return (
    <>
    <Head>
      <title>Enchantments Generator</title>
      <meta name="description" content="Converts .mcstructure file into JSON that you can easily edit." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <Header name="Enchantments Generator" pageId="enchants" />
    
    <main>
    Hello world
    </main>
    </>
  )
}