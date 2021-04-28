 import React, {useState, useEffect} from 'react'
 
 const Counter = () => {
   
    

   const [count, setCount] = useState(10);

    const handleCount = () =>{  //To get the current value we use useEffect not function.
        
        setCount(count+5);
        console.log(count);
        
    }
   
    useEffect(() => {
        console.log("Count has been changed to", count);
    }, [count])

     return (
         <div>
             
             <button onClick={handleCount}>Count is: {count}</button>
             
         </div>
     )
 }
 
 export default Counter
 