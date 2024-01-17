import { createContext, useEffect, useState } from 'react'
import { auth, google } from '../firebase/config';
import {signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup } from 'firebase/auth';


export const UsuarioContexto = createContext()

export const UsuarioProvider = ({ children }) => {

  const [usuario, setUsuario] = useState({
    email: null,
    logiado: false,
    uid: null
  });

  const verificoUsuario = (value) => {
    signInWithEmailAndPassword(auth, value.email, value.password)
      .then((credencial) => {
        const user = credencial.user
      })
  }

  const registroApp = (value) => {
    createUserWithEmailAndPassword(auth, value.email, value.password)
      .then((credencial) => {
        const user = credencial.user

      }
      )
  }
  
  const googleCuenta = ()=>{
    signInWithPopup(auth,google)
    console.log(auth)
  }

 

  const salir = () => {
    auth.signOut().then(() => {
      console.log('Sesión cerrada correctamente');
   })}


    
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsuario({
          email: user.email,
          uid: user.uid,
          logiado: true
        })
      } else {
        setUsuario({
          email: null,
          uid: null,
          logiado: false
        })
      }
    })
  }, [])



  return (
    <UsuarioContexto.Provider value={{ usuario, verificoUsuario, registroApp,salir,googleCuenta }}>
      {children}
    </UsuarioContexto.Provider>
  );
};

export default UsuarioContexto







