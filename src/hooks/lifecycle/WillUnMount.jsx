/*-
Ejemplo de uso del componente componentWillAmount para componente clase 
Ejemplo del uso de Hooks para componente funcional 
(cuando el componente va a desaparecer)
*/

import React, { Component,useEffect } from 'react'

export class WillUnMount extends Component {

    componentWillUnmount(){
        console.log('Comportamiento antes de que el componente desaparezca')
    }

    render() {
        return (
            <div>
                <h1>
                    WillUnmount
                </h1>
            </div>
        )
    }
}


export const WillUnMountHook = () => {

    useEffect(() => {
        //aqui no ponemos nada
      return () => {
        console.log('Comportamiento antes de que el componente desaparezca')
      };
    }, []);

    return (
        <div>
            <h1>
                WillUnmount
            </h1>
        </div>
        );
}
