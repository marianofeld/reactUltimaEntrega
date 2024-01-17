import { Link } from "react-router-dom"
import UsuarioContexto from "../../Context/UsuarioContexto"
import { useContext, useState } from "react"

export const Login = () => {

  const { verificoUsuario,googleCuenta} = useContext(UsuarioContexto)

  const [cuenta, setCuenta] = useState(
    {
      email: "",
      password: ""
    })

  const efectosLogin = (e) => {
    setCuenta({
      ...cuenta,
      [e.target.name]: e.target.value
    })
  }

  const submitCuenta = (e) => {
    e.preventDefault()
    verificoUsuario(cuenta)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-white p-12 rounded-lg shadow-md w-105">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Iniciar sesión</h2>
        <form onSubmit={submitCuenta} className="space-y-6">
          <div className="mb-6">
            <label htmlFor="username" className="block text-gray-600 text-xl mb-2">Nombre de email</label>
            <input
              type="text"
              name="email"
              placeholder="Ingresa tu email"
              value={cuenta.email}
              onChange={efectosLogin}
              required
              id="username"
              className="w-full p-4 border border-gray-300 rounded bg-gray-100 text-xl focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-600 text-xl mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Ingresa tu password"
              value={cuenta.password}
              onChange={efectosLogin}
              required
              className="w-full p-4 border border-gray-300 rounded bg-gray-100 text-xl focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <button
              type="submit"
              className="bg-yellow-500 text-white my-2 px-6 py-4 rounded text-2xl hover:bg-yellow-400 focus:outline-none focus:shadow-outline-yellow"
            >
              Iniciar sesión
            </button>
           
            <Link
              to="/registro"
              className="bg-yellow-500 text-center text-white my-2 px-6 py-4 rounded text-2xl hover:bg-yellow-400 focus:outline-none focus:shadow-outline-yellow"
            >
              Registrarme
            </Link>
          </div>
        </form>
        <button
              onClick={()=>googleCuenta()}
              className="bg-yellow-500 text-white my-2 px-6 py-4 rounded text-2xl hover:bg-yellow-400 focus:outline-none focus:shadow-outline-yellow"
            >
              Iniciar sesión con google
            </button>
      </div>
    </div>
  )
  }

export default Login;