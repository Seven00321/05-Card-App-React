import { useEffect, useReducer } from "react";
import { itemsReduce } from "../reducer/itemsReducer";

import { AddProductCart, UpdateQuantityProductCart, DeleteProductCart } from "../reducer/itemsActions";


const initialCartItems = JSON.parse(sessionStorage.getItem("cart") || []);

export const useItemsCart = () => {
    //const [ cartItems, setCartItems] = useState(initialCartItems);
    const [cartItems, dispatch] = useReducer(itemsReduce, initialCartItems);

    useEffect(() => {
        // Sesion STORAGE
        sessionStorage.setItem("cart", JSON.stringify(cartItems));
        }, [cartItems]);

    const handlerAddProductCart = (product) => {
        const hasItem = cartItems.find((i) => i.product.id === product.id);
        if (hasItem) {
        // setCartItems(
        //     cartItems.map( (i) => {
        //         if(i.product.id === product.id){
        //             i.quantity = i.quantity + 1;
        //         }
        //         return i;
        //     })
        // );
        dispatch({
            type: UpdateQuantityProductCart,
            payload: product,
        });
        } else {
        // setCartItems([
        //     ...cartItems,
        //     {
        //         product,
        //         quantity: 1,
        //     }
        // ]);
        dispatch({
            type: AddProductCart,
            payload: product,
        });
        }
    };

    const handlerDeleteProductCard = (id) => {
        // setCartItems([
        //     ...cartItems.filter((i) => i.product.id !== id)
        // ])
        dispatch({
        type: DeleteProductCart,
        payload: id,
        });
    };

    return {
        cartItems,
        handlerAddProductCart,
        handlerDeleteProductCard,
    };
};
