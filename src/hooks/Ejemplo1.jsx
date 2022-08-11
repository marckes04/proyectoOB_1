/* Ejemplo 1: Uso Hook State */

/*Crear un componente de tipo funcion 
y acceder a su estado privado atraves de hook */


import React, {useState} from 'react'

const Ejemplo1 = () => {

    //Valor inicial para un contador
    const ValorInicial = 0;
     //Valor inicial para una persona
    const personaInicial = {
        nombre : 'Mario',
        email: 'maresp95@gmail.com'
    }

/* Queremos que el VALORINICIAL Y PERSONAINICIAL
sean parte del estado del componente para asi poder gestionar el cambio
y que estas se vean reflejados en las vistas del componente 

const[nombreVariable, funcionParaCambiar]=useState(valorInicial)
*/

const[persona,setPersona] = useState(ValorInicial)
const[contador,setContador] = useState(ValorInicial)

/*
Funcion para actualizar el estado privado que contiene el contador
*/

function incrementarContador(){
    setContador(contador + 1);

}

function actualizarPersona(){
    setPersona({
        nombre : 'pepito',
        email  : 'pepito@mail.com'
    }
    )
}



return (
    <div>
        <h1>***Ejemplo de useState()***</h1>
        <h2>CONTADOR: {contador}</h2>
        <h2>DATOS DE LA PERSONA:</h2>
        <h3>NOMBRE: {persona.nombre}</h3>
        <h4>EMAIL: {persona.email}</h4>

        {/*Bloque de botones*/}

        <button onClick={incrementarContador}>Incrementar Contador</button>
        <button onClick={actualizarPersona}> Actualizar persona</button>

    </div>
)

}

export default Ejemplo1