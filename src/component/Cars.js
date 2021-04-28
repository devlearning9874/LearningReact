import React from 'react'


 const Cars = (props) => {
    return (
        <div>
            <ul>
                {
                    props.cars.map((name)=>{
                        return(
                            <li>{name}</li>
                        )
                        
                    })
                    
                    }
            </ul>
        </div>
    )
}

export default Cars
