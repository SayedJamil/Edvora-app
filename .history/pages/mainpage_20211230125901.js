import Leftcard from "./LeftCard"
import RightCard from "./RightCard"

function mainpage({ searchResults }) {
    return (
        <div className="p-20 flex flex-grow">
            <Leftcard searchResults={searchResults} />
            <RightCard searchResults={searchResults} />
            {
                searchResults.map((item) => {
                    <div>
                        <h1>
                            {item.product_name}
                        </h1>
                    </div>
                })
            }
        </div>
    )
}

export default mainpage
