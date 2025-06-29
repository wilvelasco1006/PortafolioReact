import React from 'react';
import './Store.css'
import Card from '../../components/Card'
const Store = () => {
    return (
        <div className="store">
            <h1>Tienda Digital</h1>
            <p>¡Bienvenido a la tienda! Aquí puedes encontrar varios productos/servicios que ofrezco.</p>
            <Card/>
        </div>
    )
}
export default Store