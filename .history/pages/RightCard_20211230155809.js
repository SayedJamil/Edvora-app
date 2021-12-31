import ProductCard from "./ProductCard"

function RightCard({ searchResults }) {
    return (
        <div className="ml-10 flex-grow">
            <div className="text-white font-bold text-5xl mb-9 opacity-[87%]">Edvora</div>
            <h2 className="text-white text-3xl font-semibold mb-4 opacity-50">Products</h2>
            <h2 className="text-2xl text-white">Product Name</h2>
            <div className="w-full h-0.5 bg-white opacity-50"></div>
            <div className="h-56 w-full rounded-3xl bg-[#131313] mt-5 mb-10">

            </div>
            <h2 className="text-2xl text-white">Product Name</h2>
            <div className="w-full h-0.5 bg-white opacity-50"></div>
            <div className="h-56 w-full rounded-3xl bg-[#131313] mt-5 mb-10 flex items-center">
                {
                    searchResults.map((item) =>
                        <div>
                            <Dropdown.Item text={item} className="bg-[#232323] p-2 border-[#131313]" />
                        </div>

                    )
                }
            </div>
        </div>
    )
}

export default RightCard
