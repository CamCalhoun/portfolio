import Image from 'next/image';

type TechCardProps = {
    lnk: string
    img: string
    title: string
    desc: string
    alt: string
}

const TechCard = ({ lnk, img, title, desc, alt }: TechCardProps) => {
    return (
        <div className="pointer-events-auto border-camgreen border-2 p-1 rounded-md flex text-left">
            <a href={lnk} className="flex items-center justify-center hover:scale-110" target="_blank" rel="noopener noreferrer">
                <Image
                    src={img}
                    alt={alt}
                    width={75}
                    height={75}
                    className="px-1 py-2  rounded-xl object-cover max-w-full h-auto"
                />
            </a>
            <div className="max-w-xs">
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="text-lg">{desc}</p>
            </div>
        </div>
    )
}

export default TechCard
