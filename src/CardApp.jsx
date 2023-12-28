import React from 'react'

export const CardApp = () => {
  return (
    <>
        

        <div className='container'>
            <h3>Cart App</h3>
            
            {/*Lista Productos*/}
            <div className='row'> 
                {/*Primer Producto*/}
                <div className='col-4 my-2'>    
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Teclado Mecanico RGB</h5>
                            <p className='card-text'>Teclado Mecanico con luces RGB switches cherry red</p>
                            <p className='card-text'>$ 1000</p>
                            <button className='btn btn-primary'>Agregar</button>
                        </div>
                    </div>
                </div>

                {/*Segundo Producto*/}
                <div className='col-4 my-2'>    
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Samsung Smart TV 55</h5>
                            <p className='card-text'>Teclado Mecanico con luces RGB switches cherry red</p>
                            <p className='card-text'>$ 3000</p>
                            <button className='btn btn-primary'>Agregar</button>
                        </div>
                    </div>
                </div>

                {/*Tercer Producto*/}
                <div className='col-4 my-2'>    
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Audifono Bluetooth Sony</h5>
                            <p className='card-text'>Teclado Mecanico con luces RGB switches cherry red</p>
                            <p className='card-text'>$ 770</p>
                            <button className='btn btn-primary'>Agregar</button>
                        </div>
                    </div>
                </div>

                {/*Cuarto Producto*/}
                <div className='col-4 my-2'>    
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Memoria Corsair 8GB DDR5</h5>
                            <p className='card-text'>Teclado Mecanico con luces RGB switches cherry red</p>
                            <p className='card-text'>$ 3000</p>
                            <button className='btn btn-primary'>Agregar</button>
                        </div>
                    </div>
                </div>

                {/*Quinto Producto*/}
                <div className='col-4 my-2'>    
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Asus Nvidia RTX</h5>
                            <p className='card-text'>Teclado Mecanico con luces RGB switches cherry red</p>
                            <p className='card-text'>$ 5000</p>
                            <button className='btn btn-primary'>Agregar</button>
                        </div>
                    </div>
                </div>

                {/*Sexto Producto*/}
                <div className='col-4 my-2'>    
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>CPU Intel CORE i5</h5>
                            <p className='card-text'>Teclado Mecanico con luces RGB switches cherry red</p>
                            <p className='card-text'>$ 4000</p>
                            <button className='btn btn-primary'>Agregar</button>
                        </div>
                    </div>
                </div>
            </div>

            {/*Tabla de Items*/}
            <div className='my-4 w-50'>
                <h3>Carro de Compras</h3>
                <table className='table table-hover table-striped'>
                    {/*Cabecera*/}
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Total</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>

                    {/*Cuerpo*/}
                    <tbody>
                        <tr>
                            <td>nombre</td>
                            <td>precio</td>
                            <td>cantidad</td>
                            <td>total</td>
                            <td>eliminar</td>
                        </tr>
                    </tbody>

                    {/*Footer*/}
                    <tfoot>
                        <tr>
                            <td colSpan="2"></td>
                            <td colSpan="1" className='text-start fw-bold'>Total</td>
                            <td colSpan="2" className='text-start fw-bold'>12345</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </>
  )
}
