import { createContext, useContext } from "react";

export const ProductContext = createContext(null);

export function useProduct() {
    return useContext(ProductContext);
}
