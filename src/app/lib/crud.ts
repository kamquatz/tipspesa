import supabase from './supabaseClient';

interface Item {
  id?: number;
  [key: string]: any;
}

// Create
export const createItem = async (table: string, item: Item) => {
  const { data, error } = await supabase.from(table).insert([item]);
  if (error) throw error;
  return data;
};

// Read
export const getItems = async (table: string) => {
  const { data, error } = await supabase.from(table).select('*');
  if (error) throw error;
  return data;
};

// Update
export const updateItem = async (table: string, id: number, item: Item) => {
  const { data, error } = await supabase.from(table).update(item).eq('id', id);
  if (error) throw error;
  return data;
};

// Delete
export const deleteItem = async (table: string, id: number) => {
  const { data, error } = await supabase.from(table).delete().eq('id', id);
  if (error) throw error;
  return data;
};
