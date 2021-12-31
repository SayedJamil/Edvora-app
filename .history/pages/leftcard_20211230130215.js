function leftcard({ searchResults }) {
    // const appleProducts = searchResults.filter((searchResults) => searchResults.product_name.includes("Alphabet"));
    const appleProducts = searchResults.map(
        record =>
            <li >{record.brand_name.value}</li>
    )
const searchName=
    console.log(appleProducts)
    console.log(searchResults)
    return (
        <div className="h-72 w-60 bg-[#131313] rounded-2xl p-4">
            <h3 className="text-[#A5A5A5] font-light text-lg mt-2 mb-2">Filters</h3>
            <div className="w-full bg-gray-200 h-px mb-4"></div>
            <div className="relative inline-flex w-full mb-2">
                <svg className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#232323" fill-rule="nonzero" /></svg>
                <select className="rounded-md h-10 pl-5 pr-10 bg-[#232323] hover:border-[#232323] focus:outline-none appearance-none outline-none text-white w-full">
                    <option>Products </option>
                    <option>Product 1</option>
                    <option>Product 2</option>
                </select>
            </div>

            <div className="relative inline-flex w-full mb-2">
                <svg className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#232323" fill-rule="nonzero" /></svg>
                <select className="rounded-md h-10 pl-5 pr-10 bg-[#232323] hover:border-[#232323] focus:outline-none appearance-none outline-none text-white w-full">
                    <option>State </option>
                    <option>State 1</option>
                    <option>State 2</option>
                    <option>State 3</option>
                </select>
            </div>
            <div className="relative inline-flex w-full mb-2">
                <svg className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#232323" fill-rule="nonzero" /></svg>
                <select className="rounded-md h-10 pl-5 pr-10 bg-[#232323] hover:border-[#232323] focus:outline-none appearance-none outline-none text-white w-full">
                    <option>City </option>
                    <option>City 1</option>
                    <option>City 2</option>
                </select>
            </div>
            

        </div>
    )
}

export default leftcard
