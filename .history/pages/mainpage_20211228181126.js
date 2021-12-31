import Leftcard from "./LeftCard"
import RightCard from "./RightCard"

function mainpage({searchResults}) {
    return (
        <div className="p-20 flex flex-grow">
            <Leftcard searchResults={ }/>
            <RightCard />
        </div>
    )
}

export default mainpage
