import axios from "axios";
import { useEffect, useState } from "react";
axios
function DragonBall() {
    // Variables de estado string
    const [name, setName] = useState('');
    const [image, setImage] = useState('')
    // Variables de estado arrays
    const [imageArray, setImageArray] = useState([]);
    const [array, setArray] = useState([]);
    useEffect(() => {
        axios.get(`https://dragonball-api.com/api/characters/`)
            .then(res => {
                const newArray = []
                const imageArray = []
                for (let i = 0; i < 10; i++) {
                    newArray.push(res.data.items[i].name);
                    imageArray.push(res.data.items[i].image)
                }
                setArray(newArray);
                setImageArray(imageArray);
            })
    }, [])

    function checkName() {
        for (let i = 0; i < 10; i++) {
            if (name == array[i]) {
                setImage(imageArray[i])
            }
        }
    }

    function handleText(e) {
        setName(e.target.value)
    }
    return (
        <div>
            <input type="text" onChange={handleText}/>
            <button onClick={checkName}>Ingresar!</button>
            <h2>{name}</h2>
            <img src={image} alt="" />
        </div>
    );
}

export default DragonBall;