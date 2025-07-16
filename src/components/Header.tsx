import { AppButton, Logo } from "./reusables";

export default function Header() {
    return (
        <header className="flex bg-[#f5f5f5] h-16 justify-between px-20 py-2 items-center">
            <Logo />

            <AppButton text="Connect Wallet" bold bgColor="#4E36E9" textColor="#fff"/>
        </header>
    )
}