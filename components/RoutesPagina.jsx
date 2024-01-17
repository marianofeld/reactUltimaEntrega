import { BrowserRouter, Routes, Route} from "react-router-dom";
import { UsuarioContexto } from '../Context/UsuarioContexto';
import CompraForm from './Compra/CompraForm';
import { DetallesDeArmas } from './DetallesDeArmas/Detalles/DetallesDeArmas';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Login from "./Login/Login";
import CarritoWeb from './Carrito/CarritoWeb';
import Navbar from './Navbar/Navbar';
import { useContext } from "react";
import {Registro} from './RegistroDeUsuario/Registro'


export const RoutesPagina = () => {
    const { usuario } = useContext(UsuarioContexto);

    return (
        <BrowserRouter>
            <Navbar />
            <img src='../bannercs.webp' alt="Banner Counter" className="w-full object-cover" />


            {usuario.logiado ? (
                <>
                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route path="/armas/:tipoArma" element={<ItemListContainer />} />
                        <Route path="/armasID/:idArma" element={<DetallesDeArmas />} />
                        <Route path="/carrito" element={<CarritoWeb />} />
                        <Route path="/CompraForm" element={<CompraForm />} />
                        <Route path="*" element={<ItemListContainer />}/>
                    </Routes>

                </>
            ) : (
                <>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/registro" element={<Registro />} />
                        <Route path="*" element={<Login />} />
                    </Routes>
                </>
            )}

        </BrowserRouter>
    );
};
