import { Link } from "react-router-dom"

export const RenderizadoDeProductos = ({ productos }) => {

    return (

        productos.map((producto) =>

            <div key={producto.id} className="bg-slate-200 card flex flex-col">
                <img className="object-contain w-10" src={producto.img} alt={producto.nombre} />
                <div className="card-content flex flex-col">
                    <div className="flex justify-between my-1">
                        <div className="title">{producto.nombre}</div>
                        <div className="price">${producto.valor}</div>
                    </div>

                    <Link className="buy-button bg-blue-500 " to={`/armasID/${producto.id}`}>
                        <p className="text-xl">Ver mas</p>
                    </Link>
                </div>
            </div>


        )
    )
}