/*
import Head from 'next/head';
import dynamic from 'next/dynamic';
import AddPantryItem from './components/AddPantryItem';
import '../styles/pantry.css'; // Import the custom styles

const PantryListServer = dynamic(() => import('./components/PantryListServer'), { ssr: false });

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Pantry Tracker</title>
      </Head>
      <main>
        <h1>Pantry Tracker</h1>
        <AddPantryItem />
        <PantryListServer />
      </main>
    </div>
  );
}


*/
/*

import Head from 'next/head';
import dynamic from 'next/dynamic';
import '../styles/pantry.css'; // Import the custom styles

const PantryList = dynamic(() => import('./components/PantryList'), { ssr: false });

export default function Home() {
  const handleNewItem = (newItem) => {
    // This function will be passed down to PantryList
  };

  return (
    <div className="container">
      <Head>
        <title>Pantry Tracker</title>
      </Head>
      <main>
        <h1>Pantry Tracker</h1>
        <PantryList onNewItem={handleNewItem} />
      </main>
    </div>
  );
}

*/
"use client";

import React from 'react';
import AddPantryItem from './components/AddPantryItem';
import PantryList from './components/PantryList';
import './styles/styles.css'; // Import the CSS file

const Page = () => {
  return (
    <div className="container">
      <h1>Pantry Tracker</h1>
      <AddPantryItem />
      <PantryList />
    </div>
  );
};

export default Page;
