import { CatalogView } from './components/CatalogView';
import { CartView } from './components/CartView';
import { useItemsCart } from './hooks/useItemsCart';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { CartRoutes } from './routes/CartRoutes';

export const CardApp = () => {

    const { cartItems, handlerAddProductCart, handlerDeleteProductCard} = useItemsCart();

    return (
        <>
            <Navbar/>

            <div className='container my-4'>
                <h3 className='text-center'>Cart App</h3>

                {/*Rutas*/}
                <CartRoutes
                    handlerAddProductCart={handlerAddProductCart}
                    handlerDeleteProductCard={handlerDeleteProductCard}
                    cartItems={cartItems}
                ></CartRoutes>
            </div>
        </>
    )
}
