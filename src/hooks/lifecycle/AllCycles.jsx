import React, { useEffect } from 'react'

const AllCycles = () => {


    useEffect(() => {

        const IntervalID = setInterval(() => {
            document.title = `${new Date()}`
            console.log('Actulaizacion del componente')
        }, 1000)

        return () => {
            console.log('Componente va a desaparecer')
            document.title = "Tiempo detenido";
            clearInterval(IntervalID)
        }
    }, [])

    return (
        <div>

        </div>
    )
}

export default AllCycles;