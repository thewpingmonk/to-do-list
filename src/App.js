import './App.css';
import React , {useState} from 'react';
import ToDo from './Todo';

function App() {
  let [item , setItem] = useState();
  let [allItem , setAllItem] = useState([]);
  const change = (value) =>{
    setItem(value.target.value)
  }
  const clicked = () =>{
    setAllItem((oldItem) =>{
      let curItem = item;
      setItem("")
      return [...oldItem , curItem];
    })
  }
  const deletItem = (id) =>{
    setAllItem((oldItem) =>{
      return oldItem.filter((arr , ind)=>{
        return ind !== id
      })
    })
  }
  return (
    <>
      <div className = "box">
        <div className='box1'>
          <h1>ToDo List</h1>
          <div className='input'>

            <input type='input' placeholder='Add an Item' onChange={change} value={item}></input>
            <button className='button' onClick={clicked}>+</button>
          </div>
          <ol>
              {allItem.map((item , ind) =>{
                return (
                  <ToDo key = {ind} id = {ind} onselect = {deletItem}  text = {item} />
                  )
              })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
