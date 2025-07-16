import Image from "next/image"
import { Progress } from "./ui/progress"
import { FundRaiseCard } from "./FundRaiseCard"

export const FundRaises = () => {
    return (
        <div className="w-[70%] mx-auto flex flex-col gap-9">
            {
                Array.from({ length: 3 }).map((_, index) => {
                    return (
                        <FundRaiseCard key={index} value={1000} max={20000} />
                    )
                })
            }
        </div>
    )
}