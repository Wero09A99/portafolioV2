import HabilityCard from "@/components/HabilityCard";
import { FaReact, FaFigma, FaCode } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
    return (
        <>
            <p className="text-4xl md:text-5xl font-bold text-center pt-20">
                Designer & FrontEnd Developer
            </p>
            <p className="text-xl md:text-3xl pt-4 text-center">
                I like to design and code amazing applications
            </p>

            <Image src="/mf-avatar.svg" alt="avatar" width={250} height={250}/>

            <div className="flex justify-between space-x-15 overflow-x-auto mt-10">
                <HabilityCard
                    title="Frontend Development"
                    icon={<FaReact />}
                    description="Building modern and responsive web applications."
                    subtitle1="Technologies"
                    technologies={["React", "TypeScript", "TailwindCSS"]}
                    subtitle2="Tools"
                    tools={["VS Code", "Git", "Chrome DevTools"]}
                />
                <HabilityCard
                    title="Programming"
                    icon={<FaCode />}
                    description="Writing clean, efficient, and maintainable code."
                    subtitle1="Languages"
                    technologies={["JavaScript", "Python", "C++"]}
                    subtitle2="Tools"
                    tools={["VS Code", "GitHub", "Terminal"]}
                />
            </div>
        </>
    )
}