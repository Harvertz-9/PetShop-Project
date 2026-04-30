import { useState, useEffect } from "react";
import { ProductContext } from "./useProduct";
import { PRODUCTS as initialProducts } from "../data/products";

export function ProductProvider({ children }) {
    const [products, setProducts] = useState(() => {
        const savedProducts = localStorage.getItem("petshop_products");
        if (savedProducts) {
            try {
                return JSON.parse(savedProducts);
            } catch (e) {
                console.error("Error parsing products from local storage", e);
                return initialProducts;
            }
        }
        return initialProducts;
    });

    useEffect(() => {
        localStorage.setItem("petshop_products", JSON.stringify(products));
    }, [products]);

    const addProduct = (newProduct) => {
        const productToAdd = {
            ...newProduct,
            id: Date.now(), // Generate unique ID
            rating: newProduct.rating || "5.0"
        };
        setProducts(prev => [productToAdd, ...prev]);
    };

    const deleteProduct = (id) => {
        setProducts(prev => prev.filter(p => p.id !== id));
    };

    return (
        <ProductContext.Provider value={{ products, addProduct, deleteProduct }}>
            {children}
        </ProductContext.Provider>
    );
}
