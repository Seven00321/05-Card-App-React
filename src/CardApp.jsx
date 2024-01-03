import React, { useEffect, useState } from 'react'
import { CatalogView } from './components/CatalogView';
import { CartView } from './components/CartView';

const initialCartItems = [
    // {
    //     product: {
    //         id: 1,
    //         name: 'Teclado Mecanico RGB',
    //         description: 'Teclado Mecánico con luces RGB switches cherry red',
    //         price: 1000
    //     },
    //     quantity: 0,
    //     total: 0
    // }

]

export const CardApp = () => {

    const [ cartItems, setCartItems] = useState(initialCartItems);
    const handlerAddProductCart = (product) => {

        const hasItem = cartItems.find((i) => i.product.id === product.id);
        if(hasItem){
            setCartItems(
                cartItems.map( (i) => {
                    if(i.product.id === product.id){
                        i.quantity = i.quantity + 1;
                    }    
                    return i; 
                })
            );
        }else {
            setCartItems([
                ...cartItems, 
                {
                    product,
                    quantity: 1,
                }
            ]);
        }
    }

    const handlerDeleteProductCard = (id) => {
        setCartItems([
            ...cartItems.filter((i) => i.product.id !== id)
        ])
    }

    return (
        <>
            <div className='container'>
                <h3>Cart App</h3>
                
                {/*Lista de Productos*/}
                <CatalogView handler={ handlerAddProductCart }/>
                

                {/*Tabla de Items*/}
                { cartItems?.length <= 0 || 
                ( 
                    <div className="my-4 w-50">
                        <CartView 
                            items={cartItems}
                            handlerDelete={handlerDeleteProductCard}
                        />
                    </div>
                )}   
            </div>
        </>
    )
}
