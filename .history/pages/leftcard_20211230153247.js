
import { useState } from "react";
import { Dropdown } from 'semantic-ui-react'

function leftcard({ searchResults }) {
    function removeDups(data) {
        return data.filter((value, index) => data.indexOf(value) === index);
    }
    console.log(searchResults)
    const productList = [];
    const stateList = [];
    const cityList = [];
    searchResults.map((item) => {
        // console.log(item.product_name)
        productList.push(item.product_name);
        stateList.push(item.address.state);
        cityList.push(item.address.city);
    })
    console.log(removeDups(productList))
    console.log(removeDups(stateList))
    console.log(removeDups(cityList))
    removeDups(productList).map((item) => {
        console.log(item)
    })
    return (
        <div className="h-72 w-60 bg-[#131313] rounded-2xl p-4">
            <h3 className="text-[#A5A5A5] font-light text-lg mt-2 mb-2">Filters
            </h3>
            <div className="w-full bg-gray-200 h-px mb-4"></div>
            <Dropdown text='Product' className="rounded-md p-2 bg-[#232323] hover:border-[#232323] focus:outline-none appearance-none outline-none text-white w-full justify-center text-lg items-center mb-2 border-[#131313]">
                <Dropdown.Menu className="bg-[#232323] border-[#131313]!important outline-none rounded-md">
                    {
                        removeDups(productList).map((item) =>
                            <div>
                                <Dropdown.Item text={item} className="bg-[#232323] p-2 border-[#131313]" />
                            </div>

                        )
                    }

                </Dropdown.Menu>
            </Dropdown>

            <Dropdown text='State' className="rounded-md p-2 bg-[#232323] hover:border-[#232323] focus:outline-none appearance-none outline-none text-white w-full justify-center text-lg items-center mb-2 border-[#131313]">
                <Dropdown.Menu className="bg-[#232323] border-[#131313]!important outline-none rounded-md">
                    {
                        removeDups(stateList).map((item) =>
                            <div>
                                <Dropdown.Item text={item} className="bg-[#232323] p-2 border-[#131313]" />
                            </div>

                        )
                    }

                </Dropdown.Menu>
            </Dropdown>

            <Dropdown text='City' className="rounded-md p-2 bg-[#232323] hover:border-[#232323] focus:outline-none appearance-none outline-none text-white w-full justify-center text-lg items-center mb-2 border-[#131313]">
                <Dropdown.Menu className="bg-[#232323] border-[#131313]!important outline-none rounded-md">
                    {
                        removeDups(cityList).map((item) =>
                            <div>
                                <Dropdown.Item text={item} className="bg-[#232323] p-2 border-[#131313]" />
                            </div>

                        )
                    }

                </Dropdown.Menu>
            </Dropdown>


        </div>
    )
}

export default leftcard
