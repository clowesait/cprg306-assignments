"use client";
import { useState, useEffect } from "react";

import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page(){
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  
  //useEffect to load items from the database when the user is logged in
  //and set the items state to the fetched items
  useEffect(() => {
    if (user !== null) {
      const loadItems = async () => {
        const fetchedItems = await getItems(user.uid);
        setItems(fetchedItems);
      };
      loadItems();
    }
  }, [user]);

  //if the user is not logged in but tries to access the page, redirect them to the login page
  if (user === null) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white">
        <h1 className="text-4xl font-bold mb-4">You must login, before you can begin</h1>
        <a href="/week-10" className="bg-orange-600 hover:bg-orange-400 text-white py-2 px-4 rounded">
          Click here to redirect to landing page!
        </a>
      </main>
    );
  }

  //splits the name of the item at the comma and trims the whitespace, then sets the selected item name to the first part of the split name
  const handleItemSelect = (item) => {
    let text = item.name.split(",")[0].trim();
    text = text.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
    setSelectedItemName(text);
  };

  //function to add an item to the list of items. It takes the item as a parameter, adds it to the database, and then updates the state of items to include the new item
  const handleAddItem = async (item) => {
    const id = await addItem(user.uid, item);
    const newItem = {...item, id};
    setItems(prevItems => [...prevItems, newItem]);
  };

  return (
    <main className=" bg-slate-950 min-h-screen">
      <h1 className="text-3xl font-bold m-2">Shopping List</h1>
      <div className="flex flex-row">
        <div>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect}/>
        </div>
        <div>
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
