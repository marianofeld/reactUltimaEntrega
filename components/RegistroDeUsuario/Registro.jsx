import { useState, useContext } from 'react';
import UsuarioContexto from '../../Context/UsuarioContexto';

export const Registro = () => {

    const {registroApp} = useContext(UsuarioContexto)

    const [usuarioNew, setUsuarioNew] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuarioNew({ ...usuarioNew, [name]: value });
      }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await registroApp(usuarioNew)
        console.log('Usuario registrado:', usuarioNew);
    };

    return (
        <div className="container mx-auto my-20">
            <div className="max-w-lg mx-auto bg-gray-800 p-12 rounded-md shadow-lg">
                <h2 className="text-3xl font-bold text-white mb-8">Registro de Usuario</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="mb-6">
                        <label className="block text-gray-300 text-xl mb-2" htmlFor="correo">
                            Correo Electrónico
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder='Ingrese tu correo'
                            value={usuarioNew.email}
                            onChange={handleChange}
                            className="w-full p-4 bg-gray-700 text-white border rounded-md focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-300 text-xl mb-2" htmlFor="contraseña">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder='Ingrese su contraseña'
                            value={usuarioNew.password}
                            onChange={handleChange}
                            className="w-full p-4 bg-gray-700 text-white border rounded-md focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-4 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue text-lg"
                    >
                        Registrar
                    </button>
                </form>
            </div>
        </div>
    )
}
export default Registro