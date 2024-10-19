import Image from "next/image";
import tripsmart from "../../public/images/tripsmart.png";

interface LogoProps {
    LogoHeight?: number;
    LogoWidth?:number // Optional prop for LogoHeight, it can be a string (like Tailwind class or px, rem units)
}

// take LogoHeight as a prop
export const Logo: React.FC<LogoProps> = ({ LogoHeight, LogoWidth }) => {    return (
        <div className="flex items-center gap-3">
            <Image
                width={LogoWidth}
                height={LogoHeight}
                src={tripsmart}
                alt="Logo"
            />
        </div>
    );
}