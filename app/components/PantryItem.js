/*
"use client";

import React, { useEffect, useState } from 'react';
import { doc, updateDoc, deleteDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

const PantryItem = React.memo(({ id }) => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    const itemRef = doc(db, 'pantry', id);
    const unsubscribe = onSnapshot(itemRef, (doc) => {
      setItem(doc.data());
    });

    return () => unsubscribe();
  }, [id]);

  const increaseQuantity = async () => {
    const itemRef = doc(db, 'pantry', id);
    await updateDoc(itemRef, {
      quantity: item.quantity + 1
    });
  };

  const decreaseQuantity = async () => {
    if (item.quantity > 0) {
      const itemRef = doc(db, 'pantry', id);
      await updateDoc(itemRef, {
        quantity: item.quantity - 1
      });
    }
  };

  const removeItem = async () => {
    try {
      const itemRef = doc(db, 'pantry', id);
      await deleteDoc(itemRef);
      console.log(`Item with id ${id} removed successfully.`);
    } catch (error) {
      console.error("Error removing item: ", error);
    }
  };

  if (!item) return null;

  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.type}</td>
      <td>{item.quantity}</td>
      <td>{item.cost}</td>
      <td>{item.location}</td>
      <td className="actions">
        <button onClick={increaseQuantity}>+</button>
        <button onClick={decreaseQuantity}>-</button>
        <button onClick={removeItem}>Remove</button>
      </td>
    </tr>
  );
});

export default PantryItem;

*/

"use client";

import React from 'react';
import { db } from '../lib/firebaseConfig';
import { doc, updateDoc, deleteDoc } from 'firebase/firestore';

const PantryItem = ({ item }) => {
  const handleIncreaseQuantity = async () => {
    const itemRef = doc(db, 'pantryItems', item.id);
    await updateDoc(itemRef, { quantity: Number(item.quantity) + 1 });
  };

  const handleDecreaseQuantity = async () => {
    if (item.quantity > 0) {
      const itemRef = doc(db, 'pantryItems', item.id);
      await updateDoc(itemRef, { quantity: Number(item.quantity) - 1 });
    }
  };

  const handleIncreaseCost = async () => {
    const itemRef = doc(db, 'pantryItems', item.id);
    await updateDoc(itemRef, { cost: Number(item.cost) + 1 });
  };

  const handleDecreaseCost = async () => {
    if (item.cost > 0) {
      const itemRef = doc(db, 'pantryItems', item.id);
      await updateDoc(itemRef, { cost: Number(item.cost) - 1 });
    }
  };

  const handleRemoveItem = async () => {
    const itemRef = doc(db, 'pantryItems', item.id);
    await deleteDoc(itemRef);
  };

  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.brand}</td>
      <td>{item.type}</td>
      <td>{item.location}</td>
      <td>{item.quantity}</td>
      <td>
        <button onClick={handleIncreaseQuantity}>+</button>
        <button onClick={handleDecreaseQuantity}>-</button>
      </td>
      <td>{item.cost}</td>
      <td>
        <button onClick={handleIncreaseCost}>+</button>
        <button onClick={handleDecreaseCost}>-</button>
      </td>
      <td>
        <button onClick={handleRemoveItem}>Remove</button>
      </td>
    </tr>
  );
};

export default PantryItem;
