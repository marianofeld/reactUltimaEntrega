import { createContext, useState, useEffect } from "react"

export const CarritoContexto = createContext()

export const CarritoProvider = ({ children }) => {

  const [carrito, setCarrito] = useState([])

  useEffect(() => {
    const storedCarrito = JSON.parse(localStorage.getItem("carrito"));
    if (storedCarrito) {
      setCarrito(storedCarrito);
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const vaciarCarrito = () => {
    setCarrito([])
  }

  const cantidadDeArmas = () => {
    return carrito.reduce((iterador, arma) => arma.cantidad + iterador, 0)
  }

  const precioTotal = () => {
    return carrito.reduce((iterador, arma) => (arma.cantidad * arma.valor) + iterador, 0)
  }

  const removeArma = (id) => {
    setCarrito(carrito.filter(arma => arma.id !== id))
  }

  const agregarAlCarrito = (arma) => {
    const armaBuscada = carrito.find(item => item.id == arma.id)

    if (armaBuscada) {
      armaBuscada.cantidad = armaBuscada.cantidad + arma.cantidad
      setCarrito([...carrito])
    } else {
      setCarrito([...carrito, arma])

    }
  }


  return (
    <CarritoContexto.Provider value={{
      carrito,
      vaciarCarrito,
      agregarAlCarrito,
      cantidadDeArmas,
      precioTotal,
      removeArma
    }}>
      {children}
    </CarritoContexto.Provider>

  )
}

export default CarritoContexto