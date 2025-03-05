"use client";

import { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  // useState hook to store the current sort method
  const [sortBy, setSortBy] = useState("name");
  // Sorts the items in a shallow copy of the items array. -1 means a should come before b, 0 means a and b are equal, and 1 means a should come after b.
  // If sortBy is equal to name, it sorts the items by name. If the sortBy is equal to category, it sorts the items by category.
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      } else if(a.name.toLowerCase() === b.name.toLowerCase()){
        return 0;
      } else {
        return -1;
      }
    }
    else{
      if (a.category.toLowerCase() > b.category.toLowerCase()) {
        return 1;
      } else if(a.category.toLowerCase() === b.category.toLowerCase()){
        return 0;
      } else {
        return -1;
      }
    }
  });

  return (
    // Returns the buttons for sorting by name or category, and a list of items sorted by the selected sort method
    <div className="p-2 m-2 space-y-2 max-w-sm">
      <h2>Sort by:</h2>
      <button onClick={() => setSortBy("name")} className={`${sortBy === "name" ? "bg-orange-400" : "bg-orange-600"} p-2 m-2`}>
        Name
      </button>
      <button onClick={() => setSortBy("category")} className={`${sortBy === "category" ? "bg-orange-400" : "bg-orange-600"} p-2`}>
        Category
      </button>
      <ul>
        {sortedItems.map(item => (
          <Item
          key={item.name}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}