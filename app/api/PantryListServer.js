/*
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import PantryItem from './PantryItem';

const PantryListServer = async () => {
  const querySnapshot = await getDocs(collection(db, 'pantry'));
  const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

  return (
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
  );
};

export default PantryListServer;


*/


// pages/api/PantryListServer.js
import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const querySnapshot = await getDocs(collection(db, 'pantryItems'));
      const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      res.status(200).json(items);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch items' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
