import ProductCard from "./ProductCard"

function RightCard({ searchResults }) {
    console.log(searchResults)
    return (
        <div className="ml-10 flex-grow w-full overflow-x-hidden">
            <div className="text-white font-bold text-5xl mb-9 opacity-[87%]">Edvora</div>
            <h2 className="text-white text-3xl font-semibold mb-4 opacity-50">Products</h2>
            <h2 className="text-2xl text-white">Product Name</h2>
            <div className="w-full h-0.5 bg-white opacity-50"></div>
            <div className="h-56 w-full rounded-3xl bg-[#131313] mt-5 mb-10">

            </div>
            <h2 className="text-2xl text-white">Product Name</h2>
            <div className="w-full h-0.5 bg-white opacity-50"></div>
            <div className="h-56 w-11/12 rounded-3xl bg-[#131313] mt-5 mb-10 flex items-center overflow-x-scroll">
                {
                    searchResults.map((item) =>
                        <div>
                            <ProductCard name={item.product_name} image={item.image} brand={item.brand_name} desc={item.decription} state={item.address.state} city={item.address.state}/>
                        </div>

                    )
                }
                <ProductCard />
            </div>
        </div>
    )
}

export default RightCard
