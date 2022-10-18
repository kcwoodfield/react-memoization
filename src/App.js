import { useState, useRef } from 'react';

function App() {

  const [items, setItems] = useState([]);
  const inputRef = useRef();

  function onSubmit(e) {
    e.preventDefault();
    const newItem = inputRef.current.value;
    if (newItem === "") return;

    setItems(prev => [...prev, newItem]);
    inputRef.current.value = "";
  }

  return (
    <>
      Search
      <input type="search" />
      <br/>
      <form onSubmit={onSubmit}>
        New item: <input ref={inputRef} type="text" />
        <button type="submit">Add</button>
      </form>
      <h3>Items: </h3>
      {items.map( item => <div> {item} </div> )}
    </>
  );
}

export default App;
