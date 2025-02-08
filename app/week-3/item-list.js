// import Item from "./item";

// const ItemList = () => {
//     const items = [
//       { name: "milk, 4 L 🥛", quantity: 1, category: "dairy" },
//       { name: "bread 🍞", quantity: 2, category: "bakery" },
//       { name: "eggs, dozen 🥚", quantity: 2, category: "dairy" },
//       { name: "bananas 🍌", quantity: 6, category: "produce" },
//       { name: "broccoli 🥦", quantity: 3, category: "produce" },
//       { name: "chicken breasts, 1 kg 🍗", quantity: 1, category: "meat" },
//       { name: "pasta sauce 🍝", quantity: 3, category: "canned goods" },
//       { name: "spaghetti, 454 g 🍝", quantity: 2, category: "dry goods" },
//       { name: "toilet paper, 12 pack 🧻", quantity: 1, category: "household" },
//       { name: "paper towels, 6 pack", quantity: 1, category: "household" },
//       { name: "dish soap 🍽️", quantity: 1, category: "household" },
//       { name: "hand soap 🧼", quantity: 4, category: "household" },
//     ];
  
//     return (
//       <ul className="p-2 m-2 space-y-2 max-w-sm">
//         {items.map((item) => (
//         <Item
//             key={item.name}
//             name={item.name}
//             quantity={item.quantity}
//             category={item.category}
//         />
//         ))}
//       </ul>
//     );
//   };
  
//   export default ItemList;
import Item from "./item";

function ItemList() {
  const item1 = {
    name: "milk, 4 L 🥛",
    quantity: 1,
    category: "dairy",
  };

  const item2 = {
    name: "bread 🍞",
    quantity: 2,
    category: "bakery",
  };

  const item3 = {
    name: "eggs, dozen 🥚",
    quantity: 2,
    category: "dairy",
  };

  const item4 = {
    name: "bananas 🍌",
    quantity: 6,
    category: "produce",
  };

  const item5 = {
    name: "broccoli 🥦",
    quantity: 3,
    category: "produce",
  };

  const item6 = {
    name: "chicken breasts, 1 kg 🍗",
    quantity: 1,
    category: "meat",
  };

  const item7 = {
    name: "pasta sauce 🍝",
    quantity: 3,
    category: "canned goods",
  };

  const item8 = {
    name: "spaghetti, 454 g 🍝",
    quantity: 2,
    category: "dry goods",
  };

  const item9 = {
    name: "toilet paper, 12 pack 🧻",
    quantity: 1,
    category: "household",
  };

  const item10 = {
    name: "paper towels, 6 pack",
    quantity: 1,
    category: "household",
  };

  const item11 = {
    name: "dish soap 🍽️",
    quantity: 1,
    category: "household",
  };

  const item12 = {
    name: "hand soap 🧼",
    quantity: 4,
    category: "household",
  };

  const items = [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12];

  return (
    <ul className="p-2 m-2 space-y-2 max-w-sm">
      {items.map((item) => (
        <Item
          key={item.name}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </ul>
  );
}

export default ItemList;
