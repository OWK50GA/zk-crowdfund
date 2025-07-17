import { AppButton, Logo } from "./reusables";
import { client } from '@/context/thirdWebClient'
import { ConnectButton } from 'thirdweb/react'
import { sepolia } from "thirdweb/chains";

export default function Header() {
    return (
        <header className="flex bg-[#f5f5f5] h-16 justify-between px-20 py-2 items-center">
            <Logo />

            {/* <AppButton text="Connect Wallet" bold bgColor="#4E36E9" textColor="#fff"/> */}
            <ConnectButton 
                client={client} 
                accountAbstraction={{
                    chain: sepolia,
                    sponsorGas: true
                }}
                connectButton={{
                    className: 'rounded-4xl font-semibold w-40 py-4 px-2 bg-[#4E36E9] text-white',
                    style: {
                        color: 'white',
                        backgroundColor: '#4E36E9',
                        borderRadius: '50px',
                        padding: '16px 8px',
                        fontWeight: 'bold'
                    },
                    label: 'Connect Wallet'
                }}
            />
        </header>
    )
}