import { useParams, Link } from "react-router-dom"
import { useProduct } from "../../context/useProduct"
import DetailProductLayout from "../../layout/DetailProductLayout"

export default function ProductDetail(){
    const { id } = useParams()
    const { products } = useProduct()
    const product = products.find(p => p.id === parseInt(id))

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-surface-container-lowest">
                <div className="text-center">
                    <h2 className="text-3xl font-bold font-headline text-on-surface mb-4">Product Not Found</h2>
                    <p className="text-on-surface-variant mb-8">The product you are looking for doesn't exist or has been removed.</p>
                    <Link to="/CatalogProduct" className="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-full font-bold hover:opacity-90 transition-all">
                        <span className="material-symbols-outlined text-sm">arrow_back</span>
                        Back to Catalog
                    </Link>
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