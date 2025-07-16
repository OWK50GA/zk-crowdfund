import { BinanceSvg, LabeledProgress } from "@/components/reusables";
import { Metadata, ResolvingMetadata } from "next"
import Image from "next/image";

type SpecficFundRaiseProps = {
    params: Promise<{
        id: string
    }>
}

export async function generateMetadata(
    { params }: SpecficFundRaiseProps,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { id }= await params;

    // Make request to blockchain here

    return {
        // Put Metadata here
        title: 'My Fundraise'
    }
}

export default async function SpecificFundRaise({ params }: SpecficFundRaiseProps) {

    const { id }= await params;

    return (
        <div className="flex justify-center gap-40 w-[90%] mx-auto my-20">
            <div className="flex flex-col items-start gap-3">
                <Image src={'/assets/donateImg1.png'} alt="donate" width={420} height={420} />
                <p className="text-[#6A6A6A] font-normal w-[400px]">
                    TryFi is is an AI powered Learning platform that exposes
                    users to web3 fro zero knowledge to expert level. i need
                    funding t complete the project development. here is the
                    website link www.tryfi.com. its still under build.
                </p>
            </div>

            <div>
                <div className="flex flex-col gap-6">
                    <h3 className="text-center font-semibold">Donation History</h3>
                    <div className="border border-gray-300 rounded-full px-10 py-7">
                        <LabeledProgress value={50} max={100} />
                    </div>
                </div>

                <div className="flex flex-col gap-3 py-10">
                    {
                        Array.from({ length: 6 }).map((_, i) => {
                            return (
                                <div className="flex py-2 px-3 bg-[#f5f5f5] gap-4" key={i}>
                                    <BinanceSvg />
                                    <div className="flex flex-col">
                                        <p className="text-xs">BrtuuYTYYUUUNii12gjyhddjdkdujdnddjRdudj6484j84</p>
                                        <p className="text-lg text-green-500 font-semibold">$500</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}