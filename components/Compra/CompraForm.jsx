
import { useState, useContext } from "react";
import CarritoContexto from "../../context/CarritoContexto";
import { collection, getDocs, addDoc, writeBatch, query, where, documentId } from "firebase/firestore"
import { db } from "../../firebase/config";
import Swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2.css'

const CompraForm = () => {
  const { carrito, vaciarCarrito } = useContext(CarritoContexto)
  const [ordenId, setOrdenId] = useState("")
  const ordenRef = collection(db, "ordenes")
  const [datos, setDatos] = useState(
    {
      nombre: "",
      telefono: "",
      email: ""
    }
  )

  const efectosDatos = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value })
  }

  const efectoFormulario = async (e) => {
    e.preventDefault()
    const orden = {
      cliente: datos,
      pedido: carrito,
      fecha: new Date(),
    }

    const noStock = []

    const batch = writeBatch(db)

    const armasRef = collection(db, 'armas')

    const itemsQuery = query(armasRef, where(documentId(), 'in', carrito.map(arm => arm.id)))

    const querySnapshot = await getDocs(itemsQuery)

    querySnapshot.docs.forEach(doc => {
      const item = carrito.find(arma => arma.id === doc.id)
      const stock = doc.data().stock

      if (stock >= item.cantidad) {
        batch.update(doc.ref, {

          stock: stock - item.cantidad
        })
      } else {
        noStock.push(item)
      }
    })

    if (noStock.length === 0) {

      batch.commit()
        .then(() => {

          addDoc(ordenRef, orden).then((doc) => {
            setOrdenId(doc.id)
            vaciarCarrito();
            
            Swal.fire({
              title: 'Gracias por tu compra',
              icon: 'success',
              timer: 1000
            })
          })
          
        })
    } else {
      Swal.fire({
        title: 'No hay stock',
        icon: 'error',
        confirmButtonText: 'Ok'})
        .then(function() {
          window.location.href = '/carrito'
       
        
      })
    
      
      
    }
    


    



  }
  if (ordenId) {
    return (

      <div className="min-h-screen flex flex-col items-center justify-center bg-csgo-bg">
        <h1 className="text-5xl text-white font-bold mb-2">Gracias por tu compra {datos.nombre.toUpperCase()}</h1>

        <p className="block text-white text-3xl font-semibold"> Tu codigo de orden es: {ordenId}</p>
        <p className="block text-white text-3xl font-semibold">Pronto nos pondremos en contacto.</p>
      </div>
    )

  } 







  return (
    <div className="min-h-screen flex items-center justify-center bg-csgo-bg">
      <form className="bg-csgo-form p-8 rounded shadow-md" onSubmit={efectoFormulario}>
        <h1 className="text-4xl text-white font-semibold mb-4">Formulario de contacto</h1>
        <div className="mb-4">
          <label htmlFor="nombre" className="block text-white text-xl font-semibold mb-2">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Ingresa tu nombre"
            value={datos.nombre}
            onChange={efectosDatos}
            className="w-full p-2 border-b-2 border-csgo-accent focus:outline-none focus:border-csgo-main"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="telefono" className="block text-white text-xl font-semibold mb-2">
            Teléfono
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={datos.telefono}
            onChange={efectosDatos}
            placeholder="Ingresa tu telefono"
            className="w-full p-2 border-b-2 border-csgo-accent focus:outline-none focus:border-csgo-main"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-white text-sm font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ingresa tu email"
            value={datos.email}
            onChange={efectosDatos}
            className="w-full p-2 border-b-2 border-csgo-accent focus:outline-none focus:border-csgo-main"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-csgo-main text-white py-2 px-4 rounded hover:bg-csgo-hover focus:outline-none focus:shadow-outline"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default CompraForm;

