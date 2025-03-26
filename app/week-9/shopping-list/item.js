// functional component that displays the name, quantity, and category of an item
// when clicked, the item is selected

function Item({name, quantity, category, onSelect}) {
  
    return (
      <li onClick={onSelect} className="p-3 border-b-8 rounded-3xl outline-double border-slate-950 bg-slate-900 cursor-crosshair">
        <div className="font-bold text-xl">{name}</div>
        <div className="text-sm">Buy {quantity} in {category}</div>
      </li>
    );
  }
  
  export default Item;