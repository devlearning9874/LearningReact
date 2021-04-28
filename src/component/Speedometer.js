import React, {useState, useEffect} from 'react'

 const Speedometer = () => {

    const [speed, setspeed] = useState(30);

    const handleSpeed = () => {

        setspeed(speed + 10);
        console.log(speed);
    }

    useEffect(() => {
       console.log("Currrent speed changed to:", speed);
        return () =>{
                 //Cleaner function returns before effect.
          console.log("Older value of speed", speed);
        }
            
      
    }, [speed])

    useEffect(() => {
        console.log("Speedometer Mounted.")
        return () => {
            console.log("Speedometer un-mounted.")
        }
    }, [])


    return (
        <div>
            <hr />
             <h2>Speedometer</h2>

            <button onClick = {handleSpeed}>Current Speed: {speed}</button>
        </div>
    )
}

export default Speedometer
