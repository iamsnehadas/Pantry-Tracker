/*
"use client";

import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

const AddPantryItem = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [cost, setCost] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, 'pantry'), {
      name,
      type,
      quantity: parseInt(quantity),
      cost: parseFloat(cost),
      location
    });
    setName('');
    setType('');
    setQuantity('');
    setCost('');
    setLocation('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Cost per Piece"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddPantryItem;

*//*
"use client";

import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

const AddPantryItem = ({ onNewItem }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [cost, setCost] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newItem = {
      name,
      type,
      quantity: parseInt(quantity),
      cost: parseFloat(cost),
      location
    };
    const docRef = await addDoc(collection(db, 'pantry'), newItem);
    onNewItem({ id: docRef.id, ...newItem });
    setName('');
    setType('');
    setQuantity('');
    setCost('');
    setLocation('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Cost per Piece"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddPantryItem;

*/

"use client";

import React, { useState } from 'react';
import { db } from '../lib/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const AddPantryItem = () => {
  const [item, setItem] = useState({ name: '', type: '', quantity: '', cost: '', brand: '', location: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'pantryItems'), item);
      setItem({ name: '', type: '', quantity: '', cost: '', brand: '', location: '' });
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-item-form">
      <input name="name" value={item.name} onChange={handleChange} placeholder="Name" required />
      <input name="type" value={item.type} onChange={handleChange} placeholder="Type" />
      <input name="quantity" type="number" value={item.quantity} onChange={handleChange} placeholder="Quantity (kg)" required />
      <input name="cost" type="number" value={item.cost} onChange={handleChange} placeholder="Cost per unit (Rs.)" required />
      <input name="brand" value={item.brand} onChange={handleChange} placeholder="Brand"  />
      <input name="location" value={item.location} onChange={handleChange} placeholder="Location (Row, Column)" required />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddPantryItem;
