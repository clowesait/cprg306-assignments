// functional component that destructures the props object to get the name, quantity, and category of the item and returns a li element for each item in the list

function Item(props) {
    const { name, quantity, category } = props;
  
    return (
      <li className="p-3 border-b-8 rounded-3xl outline-double border-slate-950 bg-slate-900">
        <div className="font-bold text-xl">{name}</div>
        <div className="text-sm">Buy {quantity} in {category}</div>
      </li>
    );
  }
  
  export default Item;