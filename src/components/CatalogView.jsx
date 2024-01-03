import React, { useEffect, useState } from 'react'
import { getProducts } from '../services/productsService'
import { ProductCardView } from './ProductCardView';

export const CatalogView = ( {handler} ) => {

    const [products, setProducts] = useState([]);

    // Use Effect
    useEffect(
        () => {
            setProducts(getProducts());
        }, []
    );

    return (
        <>
            <div className='row'> 
                {/*Productos*/}
                { products.map(prod => (

                    <div className='col-4 my-2' key={prod.id}>    
                        {/*Producto*/}
                        <ProductCardView 
                            handler={handler}
                            id={prod.id}
                            name={prod.name} 
                            description={prod.description} 
                            price={prod.price}
                        />
                        
                    </div>   

                ))}             
            </div>           
        </>
    )
}
