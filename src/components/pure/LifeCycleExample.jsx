/*
Ejemplo de componente de tipo clase que dispone
los metodos de ciclo de vida
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LifeCycleExample extends Component {
    constructor(props) {
        super(props)
        console.log('CONSTRUCTOR: Cuando se instancia el componente')

    }

    componentWillMount() {
        console.log('WILLMOUNT:Antes del montaje  del componente')

    }

    componentDidMount() {
        console.log('DIDMOUNT:Justo en el montaje  del componente, antes de rederizarlo')

    }

    componentWillReceiveProps(nextProps) {
        console.log('WillReceiveProps:Si va a recibir nueva props')

    }

    shouldComponentUpdate(nextProps, nextState) {
    //Rerurn True/False. Determina si el componente debe o no actualizarse
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('WillUpdate:Justo antes de actualizarse')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('DidUpdate:Justo despues de actualizarse')
    }

    componentWillUnmount() {
        console.log('WillAmount:Justo antes de desaparecer')
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

LifeCycleExample.propTypes = {

};

export default LifeCycleExample;