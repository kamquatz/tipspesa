// pages/index.tsx
import { useState, useEffect } from 'react';
import { createItem, getItems, updateItem, deleteItem } from '../lib/crud';

interface Item {
    id: number;
    name: string;
}

export default function Home() {
    const [items, setItems] = useState<Item[]>([]);
    const [newItem, setNewItem] = useState<string>('');
    const table = 'your_table_name';

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const data = await getItems(table);
            setItems(data);
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };

    const handleAddItem = async () => {
        try {
            await createItem(table, { name: newItem });
            setNewItem('');
            fetchItems();
        } catch (error) {
            console.error('Error adding item:', error);
        }
    };

    const handleUpdateItem = async (id: number) => {
        try {
            await updateItem(table, id, { name: 'Updated Item' });
            fetchItems();
        } catch (error) {
            console.error('Error updating item:', error);
        }
    };

    const handleDeleteItem = async (id: number) => {
        try {
            await deleteItem(table, id);
            fetchItems();
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    return (
        <div>
            <h1>Supabase CRUD Example</h1>
            <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button onClick={handleAddItem}>Add Item</button>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.name}
                        <button onClick={() => handleUpdateItem(item.id)}>Update</button>
                        <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
