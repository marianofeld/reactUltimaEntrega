import { useState, useContext } from "react";
import CarritoContexto from "../../../context/CarritoContexto.jsx"


export const DetalleDeArmasVision = ({ arma }) => {

    const [cantidad, setCantidad] = useState(1)
    const { agregarAlCarrito } = useContext(CarritoContexto)



    const aumentarCantidad = () => {
        arma.stock > cantidad && setCantidad(cantidad + 1)
    }

    const disminuirCantidad = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const addToCart = () => {
        const armaEnElCarro = {
            ...arma,
            cantidad

        }
        agregarAlCarrito(armaEnElCarro)


    }

    return (
        <div className="flex p-4 items-center justify-center m-40 bg-white" key={arma.id}>
            <img  src={arma.img} alt={arma.nombre} />
            <div className="px-4">
                <div className="flex flex-col ">
                    <h1 className="text-5xl roboto">{arma.nombre} </h1>
                    <p className="text-5xl roboto py-4">${arma.valor}</p>

                </div>
                <div>
                    <p className="text-2xl roboto py-4">{arma.descripcion}</p>
                    <div className="flex items-center py-5">
                        <button onClick={disminuirCantidad} className="bg-gray-800 text-3xl hover:bg-gray-700 text-white font-bold py-2 px-4 border-b-4 border-gray-600 hover:border-gray-500 rounded">-</button>
                        <span className="px-4 text-2xl">{cantidad}</span>
                        <button onClick={aumentarCantidad} className="bg-gray-800 text-3xl hover:bg-gray-700 text-white font-bold py-2 px-4 border-b-4 border-gray-600 hover:border-gray-500 rounded">+</button>
                    </div>
                    <button onClick={addToCart} className="bg-gray-800 text-5xl roboto hover:bg-gray-700 text-white font-bold py-2 px-4 border-b-4 border-gray-600 hover:border-gray-500 rounded">BUY</button>
                </div>
            </div>
            {console.log("ir a carrito o agregar o tostada")}
        </div>

    )
}

export default DetalleDeArmasVision