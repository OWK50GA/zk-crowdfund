import { Button } from "./ui/button"


export const AppButton = ({ text, bold, bgColor, textColor, onClick }: {
    text: string,
    bold?: boolean,
    bgColor: string, // should be hexcode
    textColor: string,
    onClick?: () => void
}) => {
    return (
        <Button 
            className={`rounded-4xl ${bold && 'font-semibold'} w-40 py-4 px-2`}
            style={{ backgroundColor: bgColor, color: textColor }}
            onClick={onClick}
        >
            {text}
        </Button>
    )
}

export const CurveSvg = () => (
    <svg width="1141" height="571" viewBox="0 0 1141 571" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1138 570.5C1138 257.078 883.922 3 570.5 3C257.078 3 3 257.078 3 570.5" stroke="url(#paint0_linear_11_47)"             stroke-width="6" stroke-dasharray="28 28"/>
        <defs>
            <linearGradient id="paint0_linear_11_47" x1="-12.5" y1="583" x2="1138" y2="571" gradientUnits="userSpaceOnUse">
                <stop stop-color="white"/>
                <stop offset="0.149038" stop-color="#78EC95"/>
                <stop offset="0.865385" stop-color="#78EC95"/>
                <stop offset="1" stop-color="white"/>
            </linearGradient>
        </defs>
    </svg>
)

export const Logo = () => {
    return (
        <div className="font-bold text-2xl">
            <span className="text-[#4E36E9]">Raise</span>
            <span className="text-green-300">Fi</span>
        </div>
    )
}

export const ArrowSvg = () => (
    <svg width="72" height="32" viewBox="0 0 72 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0.875 16.0002C0.875 16.5195 1.08133 17.0177 1.44858 17.3849L15.1569 31.0932C15.9217 31.858 17.1617 31.858 17.9264 31.0932C18.6911 30.3285 18.6911 29.0885 17.9264 28.3238L7.56116 17.9585H69.1667C70.2483 17.9585 71.125 17.0818 71.125 16.0002C71.125 14.9186 70.2483 14.0418 69.1667 14.0418H7.56116L17.9264 3.67659C18.6911 2.9118 18.6911 1.67186 17.9264 0.907072C17.1617 0.142304 15.9217 0.142304 15.1569 0.907072L1.44858 14.6154C1.08133 14.9826 0.875 15.4808 0.875 16.0002Z" fill="black"/>
    </svg>
)