import { useEffect, useState } from "react";
import axios from "axios";
import "./asignar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Asignar(){
    const [ usuarios, setUsuarios]= useState([]);
    const [ tablausuarios, setTablausuarios]= useState([]);
    const [busqueda, setBusqueda]= useState("");

 const peticion = async()=>{
     await axios.get("https://jsonplaceholder.typicode.com/users")
     .then(response=>{
         setUsuarios(response.data);
         setTablausuarios(response.data);
     }).catch(error=>{
         console.error();
     })    
}
const handleChange=e=>{
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  }
  const filtrar=(terminoBusqueda)=>{
    var resultadosBusqueda=tablausuarios.filter((elemento)=>{
      if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      || elemento.company.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ){
        return elemento;
      }
    });
    setUsuarios(resultadosBusqueda);
  } 
useEffect(() => {
   peticion();
},[])
return (
    <div className="asig">
        <div className="containerInput">
        <input 
         className="form-control inputBuscar"
         value={busqueda}
         placeholder="busqueda por nombre"
         onChange={handleChange}
        />
        <button className="btn btn-succcess">
        <FontAwesomeIcon icon={faSearch}/>
        </button>
        </div>
       <div className="table-responsive">
         <table className="table table-sm table-bordered">
          <thead>
           <tr>
             <th>ID</th> 
             <th>Nombre</th>
             <th>Telefono</th>
             <th>Nombre de Usuario</th>  
             <th>Correo</th>  
             <th>Sitio Web</th> 
             <th>Ciudad</th> 
             <th>Empresa</th> 
             <th>Accion</th>
            </tr> 
          </thead>
          <tbody>
              {usuarios &&
              usuarios.map((usuario)=>(
                <tr key={usuario.id}>
                    <td>{usuario.id}</td> 
                    <td>{usuario.name}</td>
                    <td>{usuario.phone}</td>
                    <td>{usuario.username}</td>
                    <td>{usuario.email}</td>
                    <td>{usuario.website}</td>
                    <td>{usuario.address.city}</td>
                    <td>{usuario.company.name}</td>
                    <td>
                        <button className="btn btn-primary">Asignar</button>
                    </td>
                </tr> 
              ))}
          </tbody>
              
         </table> 
           
        </div> 
    </div>
    );
}
export default Asignar;
