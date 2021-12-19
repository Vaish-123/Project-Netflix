import './App.css'
import axios from 'axios'
import { useState } from 'react';

function App() {
  const [state, setState] = useState([])
  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
          setState(response.data)
        })
      }}>
       click</button>
      {
    state.map((obj,index)=>{
      return(
      <div><h1>{index}</h1>
      <h4>{obj.title}</h4>
      <h6>{obj.body}</h6>
      </div>)
    })
      }
    </div>
  );
}

export default App;