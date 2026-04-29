import { useParams } from "react-router-dom"
import { PRODUCTS } from "../../data/products"
import DetailProductLayout from "../../layout/DetailProductLayout"

export default function ProductDetail(){
    const { id } = useParams()
    const product = PRODUCTS.find(p => p.id === parseInt(id))

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-surface-container-lowest">
                <div className="text-center">
                    <h2 className="text-3xl font-bold font-headline text-on-surface mb-4">Product Not Found</h2>
                    <p className="text-on-surface-variant mb-8">The product you are looking for doesn't exist or has been removed.</p>
                </div>
            </div>
        )
    }

    return(
        <>
            <DetailProductLayout product={product} />
        </>
    ) 
}