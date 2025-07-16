'use client'

import { FundRaiseCard } from "@/components/FundRaiseCard";
import { useState } from "react"

export default function Donate() {

    const [searchValue, setSearchValue] = useState('');
    // Add Search Functionality

    return (
        <div className="mt-10 py-10 w-[70%] mx-auto flex flex-col gap-5">
            <h3 className="text-center font-semibold text-xl">
                People & Projects Seeking Funding
            </h3>

            <div className="px-6 py-2 w-full border border-gray-400 rounded-3xl">
                <input 
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Search"
                    className="w-full outline-0"
                />
            </div>

            {
                Array.from({ length: 3 }).map((_, index) => {
                    return (
                        <FundRaiseCard key={index} value={40} max={120} />
                    )
                })
            }
        </div>
    )
}