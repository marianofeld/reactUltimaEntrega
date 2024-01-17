import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import CarritoContexto from "../../context/CarritoContexto";
import { useContext, useState } from 'react';
import UsuarioContexto from '../../Context/UsuarioContexto';



const Navbar = () => {
    const { carrito, cantidadDeArmas,vaciarCarrito } = useContext(CarritoContexto)
    const { usuario, salir } = useContext(UsuarioContexto)

    const [showUser, setShowUser] = useState(false);

    const handleUserButtonClick = () => {
        setShowUser(!showUser);
    };


    return (
        < header className="bg-gray-800  flex justify-between h-24 items-center text-white" >
            <div >
                <a className='flex items-center' href="index.html"><img className='h-20 ml-4 rounded-full' src="../icono.webp" alt="LOGO" /></a>
            </div>
            <nav className='flex items-center'>
                <Link to="/" className='hover:text-gray-300  text-4xl font-bold roboto  px-11 no-underline'>Nosotros</Link>

                <Link className="hover:text-gray-300  text-4xl font-bold roboto  px-11 no-underline" to="/armas/pistola">Pistolas</Link >
                <Link className="hover:text-gray-300  text-4xl font-bold roboto  px-11 no-underline" to="/armas/subfusil">Subfusil</Link>
                <Link className="hover:text-gray-300  text-4xl font-bold roboto  px-11 no-underline" to="/armas/rifle">Rifles</Link>
                <Link className="hover:text-gray-300  text-4xl font-bold roboto  px-11 no-underline" to="/">Todas</Link>


                {carrito.length !== 0 &&
                    <Link to="/carrito" className='flex items-center hover:text-gray-300 px-11 no-underline' >
                        <CartWidget />
                        <p className="text-2xl">{cantidadDeArmas()}</p>
                    </Link>
                }
                {usuario.logiado && <button
                    onClick={handleUserButtonClick}
                    className="hover:text-gray-300 text-4xl font-bold roboto px-4 focus:outline-none"
                >
                    <img className='' src='../../steam.svg' alt="steam" />
                </button>}
                {(usuario.logiado === showUser) && (
                    <div className="absolute top-16 right-0 bg-gray-800 p-4 shadow-md">
                        <p className='text-3xl text-white'>{usuario.email}</p>
                        <button onClick={() =>  {salir() & vaciarCarrito() }} className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md">
                            Cerrar Sesión
                        </button>
                    </div>
                )}
            </nav>
        </header >
    )
}


export default Navbar