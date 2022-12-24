import { Link } from "react-router-dom";
import React, { useState, useEffect, useCallback } from "react";

function Generos({
    genero
}) {

    const [nome, setNome] = useState()

    const fetchData = useCallback(() => {
        fetch(`http://localhost:3001/api/genre/${genero}`)
          .then((res) => res.json())
          .then((data) => setNome(data.data[0].name));
      }, [genero]); // The useCallback hook will only change when the 'genero' value changes
    
      // Pass the memoized callback function to the useEffect hook
      useEffect(() => {
        fetchData();
      }, [fetchData]);

    if (nome) {
        return (<h3 className="badge rounded-pill bg-secondary m-2 generos">{nome}</h3>);
    }
}

export default Generos;