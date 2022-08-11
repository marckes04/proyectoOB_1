/* 
Ejemplo de uso de: 
-useState()
-useRef()
-useEffect()
*/

import React,{useState, useRef, useEffect} from 'react'
const Ejemplo2 = () => {
    // Vamos a crear dos contadores distintos
    // cada uno en estado diferente

    const[contador1,setContador1] = useState(0);
    const[contador2, setContador2] = useState(0);

    // Vamos a crear una referencia con useRef para asociar una variable
    // con un elemento del DOM del componente(vista HTML)

    const miRef = useRef();

    function Incrementar1()
    {
        setContador1(contador1 + 1)
    }
    
    
    function Incrementar2 (){   
        setContador2(contador2 + 1)
    }

    /**
     *Trabajando con useEffect
     */

    /*
    Caso 1: Usar siempre un snipet de codigo
    Se ejecuta todo lo aquello que este dentro del useEffect
    */

    /*useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL COMPONENTE')
        console.log('MOSTRANDO REFERENCIA A ELEMENTO DEL DOM')
        console.log(miRef)
    })
*/

/*
Caso 2: Ejecutar solo cuando cambie contador 1 o contador 2
Cada vez que haya cambio contador 1,se ejecuta lo que diga useEffect
en caso de que cambie contador 2 , no habra ejecucion.
 */

useEffect(() => {
    console.log('CAMBIO EN EL ESTADO COMPONENTE')
    console.log('Mostrando Referencia al elemento DOM')
  return () => {
    
  }
}, [contador1,contador2])


    return(
        <div>
            <h1>***Ejemplo de useState(), useRef() y useEffect()***</h1>
            <h2>CONTADOR1: {contador1}</h2>
            <h2>CONTADOR2: {contador2}</h2>

            {/*Elemento Referenciado*/}
            
            <h4 ref ={miRef}>
                Ejemplo de elemento referenciado
            </h4>

            {/*Botones para cambair contadores*/}
            <div>
                <button onClick={Incrementar1}> Incrementar Contador 1</button>
                <button onClick={Incrementar2}> Incrementar Contador 2</button>

            </div>

        </div>
    )
}
export default Ejemplo2;