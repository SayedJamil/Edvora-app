import Leftcard from "./LeftCard"
import RightCard from "./RightCard"

function mainpage({ searchResults }) {
    return (
        <div className="p-20 flex flex-grow">
            <Leftcard searchResults={searchResults} />
            <RightCard searchResults={searchResults} />
            {
                searchResults.map((item) => {
                    // console.log(item.product_name)
                    list.push(item.product_name);
                    console.log(list.sort());
                    const newList = [...new Set(list)]
                    console.log(newList);
                    <h1>{newList}</h1>
                })
            }
        </div>
    )
}

export default mainpage
