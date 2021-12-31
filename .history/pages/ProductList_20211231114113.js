import ProductCard from "./ProductCard"

function ProductList({ searchResults, prodName }) {



    return (
        <div>
            <h2 className="text-2xl text-white">{prodName}</h2>
            {searchResults.filter(name => name.includes({ prodName })).map(filteredName => (
                <li>{filteredName}</li>
            ))}
            <div className="w-full h-0.5 bg-white opacity-50"></div>
            <div className="h-56 w-11/12 rounded-3xl bg-[#131313] mt-5 mb-10 flex items-center overflow-x-scroll">
                {
                    searchResults.filter
                        .map((item) =>
                        <div>
                            <ProductCard name={item.product_name} image={item.image} brand={item.brand_name} desc={item.discription} state={item.address.state} city={item.address.city} price={item.price} date={item.date} />
                        </div>

                    )
                }
                <ProductCard />
            </div>
        </div>
    )
}

export default ProductList
