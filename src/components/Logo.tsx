import Image from "next/image";
import tripsmart from "../../public/images/tripsmart.png";

export default function Logo() {
    return (
        <div className="flex items-center gap-3">
            <Image
                width={60}
                height={60}
                src={tripsmart}
                alt="Logo"
            />
        </div>
    );
}