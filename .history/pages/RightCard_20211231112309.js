import ProductCard from "./ProductCard"
import ProductList from "./ProductList"

function RightCard({ searchResults }) {
    console.log(searchResults)
    return (
        <div className="ml-10 flex-grow w-full overflow-x-hidden">
            <div className="text-white font-bold text-5xl mb-9 opacity-[87%]">Edvora</div>
            <h2 className="text-white text-3xl font-semibold mb-4 opacity-50">Products</h2>
            <Prod
            <ProductList searchResults={ searchResults}/>
        </div>
    )
}

export default RightCard
