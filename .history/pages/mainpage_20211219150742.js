import Leftcard from "./LeftCard"
import RightCard from "./RightCard"

function mainpage() {
    return (
        <div className="p-20 flex flex-grow">
            <Leftcard />
            <RightCard />
        </div>
    )
}

export default mainpage
