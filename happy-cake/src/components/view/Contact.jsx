import React from 'react'
import Button from 'react-bootstrap/Button';

const Contact = () => {



  return (
    <main className='contact-css'>
        <h2 className='fs-1'>Contactanos, ¿en que te podemos ayudar?</h2>
        <div>
            <p>Correo:</p>
            <input type="email" name="email" placeholder="ejemplo@ejemplo.com" />
        </div>
        <div>
            <p>Descripción:</p>
            <input className='descripcion2' type="text" />
        </div>
        <Button className='m-3' variant="outline-danger">Enviar</Button>
    </main>
  )
}

export default Contact