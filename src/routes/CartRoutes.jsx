import React from "react";
import { CatalogView } from "../components/CatalogView";
import { CartView } from "../components/CartView";
import { Navigate, Route, Routes } from "react-router-dom";

export const CartRoutes = ({handlerAddProductCart, handlerDeleteProductCard, cartItems}) => {
    return (
        <Routes>
            {/*Ruta a Catalogos*/}
            <Route
                path="catalog"
                element={<CatalogView handler={handlerAddProductCart} />}
            />

            {/*Ruta a Tabla de Items*/}
            <Route
                path="cart"
                element={
                cartItems?.length <= 0 ? (
                    <div className="alert alert-warning">
                    No hay productos en el carrito de compras!
                    </div>
                ) : (
                    <div className="my-4 w-50">
                    <CartView
                        items={cartItems}
                        handlerDelete={handlerDeleteProductCard}
                    />
                    </div>
                )
                }
            />

            <Route path="/" element={<Navigate to={"/catalog"} />} />
        </Routes>
    );
};
