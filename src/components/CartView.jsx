import { useEffect, useState } from "react";
import { calculateTotal } from "../services/productsService";
import { useNavigate } from "react-router-dom";

export const CartView = ( {handlerDelete, items} ) => {

    const [total, setTotal] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        setTotal(calculateTotal(items));

        // Sesion STORAGE
        //sessionStorage.setItem('cart', JSON.stringify(items));

    }, [items]);

    const onDeleteProd = (id) => {
        //console.log('elimninando: ',id)
        handlerDelete(id);
    }

    const onCatalog = () => {
        navigate('/catalog');
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
                    <td colSpan="1" className="text-start fw-bold">Total</td>
                    <td colSpan="2" className="text-start fw-bold">{total}</td>
                </tr>
                </tfoot>
            </table>

            <button 
                className="btn btn-success"
                onClick={onCatalog}
            >Seguir comprando</button>
        </>
    );
};
