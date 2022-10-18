import { useState, useRef } from 'react';

function App() {

  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const inputRef = useRef();

  function onSubmit(e) {
    e.preventDefault();
    const newItem = inputRef.current.value;
    if (newItem === "") return;

    setItems(prev => {
      return [...prev, newItem];
    });

    setFilteredItems(prev => {
      return [...prev, newItem];
    });

    inputRef.current.value = "";
  }

  function onChange(e) {
    const value = e.target.value;
    setFilteredItems(items.filter( item =>
        item.toLowerCase().includes(value.toLowerCase())
      )
    )
  }

  return (
    <>
      Search
      <input onChange={onChange} type="search" />
      <br/>
      <form onSubmit={onSubmit}>
        New item: <input ref={inputRef} type="text" />
        <button type="submit">Add</button>
      </form>
      <h3>Items: </h3>
      {filteredItems.map( item => <div> {item} </div> )}
    </>
  );
}

export default App;
