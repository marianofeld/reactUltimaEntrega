import { Link } from "react-router-dom";
import CarritoContexto from "../../context/CarritoContexto"
import { useContext } from "react";


export const CarritoWeb = () => {
    const { carrito, precioTotal, removeArma } = useContext(CarritoContexto)


    return (
        <div className="bg-gray-100 p-8 w-full items-center ">
            <h1 className="text-6xl roboto font-bold mb-4">Tu carrito de compras</h1>

            {carrito.map((armCar) => (
                <div key={armCar.id} className="flex items-center border-b w-full border-gray-300 py-4 mb-8">
                    <img
                        src={armCar.img}
                        alt={armCar.nombre}
                        className="rounded-full  h-20 object-contain ml-10"
                    />
                    <div className="flex justify-evenly w-full mx-10">
                        <h2 className="text-gray-600 text-5xl roboto font-bold">{armCar.nombre}</h2>
                        <div className="flex flex-col">
                            <p className="text-gray-600 text-4xl roboto font-bold">Precio: ${armCar.valor * armCar.cantidad}</p>
                            <p className="text-gray-600 text-4xl roboto font-bold">Cantidad: {armCar.cantidad}</p>
                        </div>

                    </div>
                    <button className="mr-10 items-center" onClick={() => removeArma(armCar.id)} ><img className="h-20  items-center" src="../../../remove.png" alt="borrar del carrito" /></button>
                </div>

            ))}
            <h3 className="text-gray-600 text-4xl roboto font-bold mb-4">Total a pagar ${precioTotal()}</h3>
            <Link to="/CompraForm" className="bg-gray-800 text-5xl roboto hover:bg-gray-700 text-white font-bold mb-36 px-4 border-b-4 border-gray-600 hover:border-gray-500 rounded ">TERMINAR COMPRA</Link>
        </div>
    );
};
export default CarritoWeb;

