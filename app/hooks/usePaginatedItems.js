/*
import { useState, useEffect } from 'react';
import { collection, query, orderBy, limit, startAfter, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

const usePaginatedItems = (pageSize) => {
  const [items, setItems] = useState([]);
  const [lastDoc, setLastDoc] = useState(null);

  useEffect(() => {
    const q = query(collection(db, 'pantry'), orderBy('name'), limit(pageSize));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
      setLastDoc(lastVisible);
      setItems(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, [pageSize]);

  const fetchMoreItems = async () => {
    const q = query(collection(db, 'pantry'), orderBy('name'), startAfter(lastDoc), limit(pageSize));
    const querySnapshot = await getDocs(q);
    const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
    setLastDoc(lastVisible);
    setItems(prevItems => [...prevItems, ...querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))]);
  };

  return { items, fetchMoreItems };
};

export default usePaginatedItems;

*/

import { useState, useEffect } from 'react';
import { db } from '../lib/firebaseConfig';
import { collection, query, orderBy, limit, startAfter, getDocs } from 'firebase/firestore';

const usePaginatedItems = (pageSize) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastVisible, setLastVisible] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const fetchItems = async () => {
    setLoading(true);
    const q = query(
      collection(db, 'pantryItems'),
      orderBy('name'),
      limit(pageSize),
      lastVisible ? startAfter(lastVisible) : null
    );

    const querySnapshot = await getDocs(q);
    const newItems = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    setItems(prevItems => [...prevItems, ...newItems]);
    setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
    setHasMore(querySnapshot.docs.length === pageSize);
    setLoading(false);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return { items, loading, fetchItems, hasMore };
};

export default usePaginatedItems;

