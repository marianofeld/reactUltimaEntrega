import './App.css'
import { CarritoProvider } from './context/CarritoContexto'
import {RoutesPagina} from "./components/RoutesPagina";
import {  UsuarioProvider } from './Context/UsuarioContexto';






function App() {


  return (

    <UsuarioProvider>

      <CarritoProvider>


        
        
            <RoutesPagina/>
          

     

    </CarritoProvider>
    </UsuarioProvider >
  )
}

export default App
