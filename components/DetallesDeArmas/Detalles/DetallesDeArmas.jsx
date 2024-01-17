import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "../../../firebase/config.js"
import { doc, getDoc, } from "firebase/firestore"
import { DetalleDeArmasVision } from "./DetalleDeArmasVision.jsx"



export const DetallesDeArmas = () => {

    const [arma, setArma] = useState({})
    const { idArma } = useParams()



    useEffect(() => {

        const docRef = doc(db, 'armas', idArma)
        getDoc(docRef)
            .then((docSnapshot) => {
                const doc = {
                    ...docSnapshot.data(),
                    id: docSnapshot.id
                }

                setArma(doc)

            })
    }, [])

    return (

        <DetalleDeArmasVision arma={arma} />


    )
}

