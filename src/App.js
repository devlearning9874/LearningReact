import React, {useState} from 'react';
import './App.css';
import Counter from './component/Counter';
import  MoviesList  from './component/MoviesList';
import  PropsDemo  from './component/PropsDemo';
import  Speedometer from './component/Speedometer';
import  ApiCall from './component/ApiCall';
import SimpleForm from './component/SimpleForm';

function App() {

 const [isOnline, setisOnline] = useState(true);

  return (
    <div className="App">
      <h1>Learning React!</h1>
      <Counter />
      <SimpleForm />
      {isOnline
       ? 
       <div>
       <MoviesList />
       <PropsDemo />
       </div>
       : 
       <div>
       <Speedometer />
       <ApiCall />
       </div>
       }
      <button onClick={()=>setisOnline(!isOnline)}>isOnline:{isOnline.toString()}</button>
      

      
    </div>
  );
}

export default App;
