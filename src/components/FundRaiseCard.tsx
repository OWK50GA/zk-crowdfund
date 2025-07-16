'use client'

import Image from "next/image"
import { Progress } from "./ui/progress"
import { LabeledProgress } from "./reusables"
import { usePathname } from "next/navigation"

export const FundRaiseCard = ({ value, max }: {
    value: number,
    max: number
}) => {
    const pathname = usePathname();
    return (
        <div className="w-fit flex flex-col gap-11 border-2 shadow border-[#f5f5f5] rounded-2xl px-16 py-12">
            <h2 className="text-[#1D1D1D] font-semibold text-xl self-start">
            I need funding to complete my TryFI
            </h2>
            <div className="flex items-center gap-12">
                <Image src={'/assets/donateImg1.png'} alt="" width={500} height={500}/>
                <div className="flex flex-col gap-6">
                    <p className="text-[#6A6A6A] font-normal">
                        TryFi is is an AI powered Learning platform that exposes
                        users to web3 fro zero knowledge to expert level. i need
                        funding t complete the project development. here is the
                        website link www.tryfi.com. its still under build.
                    </p>

                    <div className="border border-gray-300 py-6.5 px-6 rounded-full">
                        <LabeledProgress value={value} max={max}/>
                    </div>
                </div>
            </div>
            <div className="flex gap-4 self-end">
                {
                    !pathname.includes('my-fundraise') && (
                        <button className="bg-[#4E36E9] text-white py-1 px-4 rounded-3xl cursor-pointer">Donate now</button>
                    )
                }
                <button className="text-[#2C2C2C] border-2 px-4 rounded-3xl cursor-pointer">Share</button>
            </div>
        </div>
    )
}