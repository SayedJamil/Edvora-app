function ProductCard({ name, image, desc, state, city, brand, price, date }) {
    return (
        // Card
        <div className="bg-[#232323] w-72 h-48 ml-10 rounded-xl p-2 text-white">
            {/* Top container */}
            <div className="flex">
                {/* Image */}
                <div>
                    <img src={image} alt="" className="w-28 h-28 rounded-lg" />
                </div>
                {/* Product name Brand name and Price */}
                <div className="justify-center flex flex-col text-left ml-1">
                    <h1 className="text-[1.25rem] m-0">{name}</h1>
                    <h1 className="text-sm opacity-70 m-0">{brand}</h1>
                    <h1 className="text-sm m-0" >${price}</h1>
                </div>
            </div>
            {/* Location and Date */}
            <div>
                <div>{state},{city}</div>
                <div>{date}</div>
                
            </div>
            {/* Description */}
            <div>
                {desc}
            </div>
        </div>
    )
}

export default ProductCard
