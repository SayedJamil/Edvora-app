function ProductCard({ name, image, desc, state, city, brand }) {
    return (
        // Card
        <div className="bg-[#232323] w-72 h-48 ml-10 rounded-xl p-2">
            {/* Top container */}
            <div>
                {/* Image */}
                <div>
                    <img src={image} alt="" className="w-28 h-28 rounded-lg" />
                </div>
                {/* Product name Brand name and Price */}
                <div>

                </div>
            </div>
            {/* Location and Date */}
            <div>

            </div>
            {/* Description */}
            <div>

            </div>
        </div>
    )
}

export default ProductCard
