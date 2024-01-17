import { useState, useEffect } from "react"
import { RenderizadoDeProductos } from "./RenderizadoDeProductos"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../../firebase/config"



const ProductosPagina = () => {

    const [productos, setProductos] = useState([])

    const { tipoArma } = useParams()


    useEffect(() => {

        const armasRef = collection(db,'armas')
        const q = tipoArma
            ? query(armasRef, where('tipo', '==', tipoArma))
            : armasRef
        getDocs(q)

            .then((QuerySnapshot) => {
                const docs = QuerySnapshot.docs.map(el => ({
                    ...el.data(),
                    id: el.id
                }))
                console.log(docs)
                setProductos(docs)
            })


    }, [tipoArma])

    return (
        <>
            <RenderizadoDeProductos productos={productos} />
        </>
    )
}



export default ProductosPagina