
import { useState, useEffect } from "react";
import axios from "axios";

function PokemonSearch() {
    // Cambiara el valor segun lo que ingrese el usuario
    const [name, setName] = useState('');
    const [imagen, setImagen] = useState('');

    function handleText(e) {
        setName(e.target.value)
    }

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
            .then(res => {
                setImagen(res.data.sprites.front_default);
            });
    }, [name])
    return (
        <div>
            <h1>Nombres de Pokemon</h1>
            <input type="text" onChange={handleText} defaultValue={name}/>
            <h2>{name}</h2>
            <img src={imagen} alt={name} />
            <h2>El nombre del pokemon es: {name}</h2>
        </div>
    );
}

export default PokemonSearch;