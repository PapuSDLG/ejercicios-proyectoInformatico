import { useEffect, useState } from "react";

function UsarMap() {
    const [number, setNumber] = useState(0);
    const [name, setName] = useState('');
    const [array, setArray] = useState([]);
    // Actualizar el valor nombre del input
    function handleName(e) {
        setName(e.target.value)
    }

    // Agregar el nombre del input al array
    function newUser(e) {
        setArray(prevArray => {
            const newArray = [...prevArray, name];
            console.log(newArray);
            return newArray;
        });
        setNumber(prevNumber => prevNumber + 1)
    }
    return (
        <div>
            <h2>Ingresar usuarios</h2>
            <input type="text" onChange={handleName} value={name}/>
            <button onClick={newUser}>Ingresar!</button>
            <h2>{name}</h2>
            <ol>
                {array.map((element, index) => (
                    <li key={index}>{element}</li>    
                ))}
            </ol>
        </div>
    );
}

export default UsarMap;