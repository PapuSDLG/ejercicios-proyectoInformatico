import { useState } from "react";

export function Random() {
    let [Numero, SetNumero] = useState(0)

    function numberRandom() {
        Numero = Math.floor(Math.random() * 1001)
        SetNumero(Numero)
    }
    return (
        <div>
            <h1 onClick={numberRandom}>{Numero}</h1>
        </div>
    );
}