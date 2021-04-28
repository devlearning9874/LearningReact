import React, {useEffect, useState} from 'react'
import axios from "axios"

const ApiCall = () => {

    const [users, setUsers] = useState(null);
    const [error, setError] = useState(null);

   useEffect( () =>{
      
       axios.get('https://jsonplaceholder.typicode.com/users')
       .then((response)=>{
          console.log(response);
          setUsers(response.data);
       }).catch((error)=>{   
          console.log(error);
          setError(error.message);
       })

   }, [])

    return (
        <div>

        <hr />

        <h2>User Data Call</h2>
            
            {users && <pre>{JSON.stringify(users,null,2)}</pre>}
            {error && <h4>Error is: {error}</h4>}
        </div>
    )
}

export default ApiCall
