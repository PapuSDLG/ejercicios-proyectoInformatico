import { useState } from "react";

export function Producto(props) {
    const { nombre, descripcion, precio, source } = props;
    return (
        <div className="producto">
            <h2>Nombre del Producto: {nombre}</h2>
            <p className="descripcion">{descripcion}</p>
            <p className="precio">Precio: {precio}</p>
            <img src={source} alt="" />
        </div>
    );
}