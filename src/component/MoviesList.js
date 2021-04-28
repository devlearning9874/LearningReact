import React from 'react'

const MoviesList = () => {

    const movieList = ["Kings", "Rahshyam", "Kaal", "Laal"];
    return (
    <div>
     <hr />
     <h2>Movies List</h2>
     <ul>
        {movieList.map(movies =>{
            return (
                <li>{movies}</li>
            )
        })}
     </ul>

     
    </div>
    
    );
}

export default MoviesList