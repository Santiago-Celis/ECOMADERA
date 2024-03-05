import { createContext, useContext, useState } from "react";
import { createProductRequest } from "../api/Product";

const ProductContext = createContext();

export const useProduct = () => {
    const context = useContext(ProductContext);

    if(!context){
        throw new Error('useProduct must be used within a ProductProvider')
    }

    return context;
}

export function ProductProvider({ children }){
    const [product, setProduct] = useState([]);

    const createProduct = async (product) => {
        console.log('producto');
        const res = await createProductRequest(product)
        console.log(res);
    }

    return(
        <ProductContext.Provider value={{
            product, 
            createProduct
            
            }}>
           { children } 
        </ProductContext.Provider>
    )

}
