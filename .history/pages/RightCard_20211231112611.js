import ProductCard from "./ProductCard"
import ProductList from "./ProductList"

function RightCard({ searchResults }) {
    function removeDups(data) {
        return data.filter((value, index) => data.indexOf(value) === index);
    }
    const productList = [];
    searchResults.map((item) => {
        // console.log(item.product_name)
        productList.push(item.product_name);
        stateList.push(item.address.state);
        cityList.push(item.address.city);
    })
    console.log(searchResults)
    return (
        <div className="ml-10 flex-grow w-full overflow-x-hidden">
            <div className="text-white font-bold text-5xl mb-9 opacity-[87%]">Edvora</div>
            <h2 className="text-white text-3xl font-semibold mb-4 opacity-50">Products</h2>
            <ProductList searchResults={searchResults} />
            <ProductList searchResults={searchResults} />
        </div>
    )
}

export default RightCard
