import React from "react";
import { useParams } from "react-router-dom";

// import Navbar from "../Navbar/Navbar";
import './productDetail.css'

function ProductDetail({ modelos }){
    const {id} = useParams();

    const productId = parseInt(id);

    const producto = modelos.find((z) => z.id == productId);

    if (!producto) {
        return <div>Producto no Encontrado</div>
    }

    return(
        <>
            {/* <Navbar></Navbar> */}
            <div className="contenedor">
                <img className="imagen" src={producto.imagen} alt="imagen" />
                <div className="texto">
                    <h1>{producto.nombre}</h1>
                    <p className="talles"> Talles disponibles: 
                    {producto.talle.map((talle, index) => (
                    <span key={index}>{talle}</span> ))}
                    </p>
                    <p className="precio">US$ {producto.precio}</p>
                    <p className="descripcion">{producto.Description}</p>
                    <ul className="comprar">
                    <button className="carrito"  type="submit" onClick={()=>alert('Se agrego a tu carrito')}>Agregar al carrito</button>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default ProductDetail;
