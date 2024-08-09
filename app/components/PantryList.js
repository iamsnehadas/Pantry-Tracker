/*
"use client";

import React, { useEffect, useState } from 'react';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import PantryItem from './PantryItem';

const PantryList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'pantry'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setItems(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Quantity</th>
            <th>Cost per Piece</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <PantryItem key={item.id} id={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PantryList;

*/

/*
"use client";

import React, { useEffect, useState } from 'react';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import PantryItem from './PantryItem';
import AddPantryItem from './AddPantryItem';

const PantryList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'pantry'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setItems(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, []);

  const handleNewItem = (newItem) => {
    setItems((prevItems) => [newItem, ...prevItems]);
  };

  return (
    <div>
      <AddPantryItem onNewItem={handleNewItem} />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Quantity</th>
            <th>Cost per Piece</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <PantryItem key={item.id} id={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PantryList;

*/
"use client";

import React, { useEffect, useState } from 'react';
import { db } from '../lib/firebaseConfig';
import { collection, onSnapshot } from 'firebase/firestore';
import PantryItem from './PantryItem'; // Ensure correct import

const PantryList = () => {
  const [pantryItems, setPantryItems] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'pantryItems'), (snapshot) => {
      const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPantryItems(items);
    });

    return () => unsubscribe();
  }, []);

  return (
    <table className="pantry-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Brand</th>
          <th>Type of Item</th>
          <th>Location (Row, Column)</th>
          <th>Quantity</th>
          <th>Update Quantity</th>
          <th>Cost per unit</th>
          <th>Update Cost</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {pantryItems.map((item) => (
          <PantryItem key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
};

export default PantryList;
