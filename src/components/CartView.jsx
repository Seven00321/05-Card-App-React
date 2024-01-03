export const CartView = ( {handlerDelete, items} ) => {

    const onDeleteProd = (id) => {
        //console.log('elimninando: ',id)
        handlerDelete(id);
    }

    return (
        <>
            <h3>Carro de Compras</h3>
            <table className="table table-hover table-striped">
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
                
                    { items.map( item => (

                        <tr key={item.product.id}>
                            <td>{item.product.name}</td>
                            <td>{item.product.price}</td>
                            <td>{item.quantity}</td>
                            <td>{item.quantity * item.product.price}</td>
                            <td><button 
                                className="btn btn-danger"
                                onClick={() => onDeleteProd(item.product.id)}>eliminar</button></td>
                        </tr>
                            
                    ))}
                 
                </tbody>

                {/*Footer*/}
                <tfoot>
                <tr>
                    <td colSpan="2"></td>
                    <td colSpan="1" className="text-start fw-bold">
                    Total
                    </td>
                    <td colSpan="2" className="text-start fw-bold">
                    12345
                    </td>
                </tr>
                </tfoot>
            </table>
        </>
    );
};
