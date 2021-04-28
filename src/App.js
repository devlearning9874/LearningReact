import React, {useState} from 'react';
import './App.css';
import Counter from './component/Counter';
import  MoviesList  from './component/MoviesList';
import  Speedometer from './component/Speedometer';

function App() {

 const [isOnline, setisOnline] = useState(true);

  return (
    <div className="App">
      <h1>Learning React!</h1>
      <Counter />
      {isOnline ? <MoviesList /> : <Speedometer />}
      <button onClick={()=>setisOnline(!isOnline)}>isOnline:{isOnline.toString()}</button>
      
    </div>
  );
}

export default App;
