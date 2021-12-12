import React from 'react';
import { Link } from "react-router-dom"; 
import { Administrador } from '../Administrador';
const listaDocentes = () => {
    return (
        <div>
            < Administrador /> 
            <div className='container mt-4'>
            <h1>buscador</h1>
            <input type='text' id='formulario' className='form-control my-2' />
            <button className='btn btn-info mb-2' id='boton'>buscar</button>
            </div>
        <div className="col">
            <div></div>
            <h1 className="text-dark text-center">Lista de Docentes</h1>
            <table className="table table-bordered table-hover tableFixHead">
             <thead className="table-primary">
                 <tr>
                     <th>N°</th>
                     <th>Nombres</th>
                     <th>Designacion de Horas</th>
                     <th>Asignar Materias</th>
                 </tr>
             </thead>
             <tbody>
                 <tr>
                     <td>1</td>
                     <td>Ing. Jesus Lopez</td>
                     <td>24 horas</td>
                     <td><Link to="/asignarMaterias"  > 
                     <button className="btn btn-primary">Asignar</button>
                     </Link></td>
                 </tr>
             </tbody>
            </table>    
             </div>
             </div>
    )
}

export default listaDocentes
