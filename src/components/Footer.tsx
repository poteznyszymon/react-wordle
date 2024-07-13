import { FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="flex-1 flex justify-center items-center">
            <div className="flex items-center gap-1 justify-center">
                <FaGithub className="text-white/30 text-xs"/>
                <a href="https://github.com/poteznyszymon" className="text-white/30">poteznyszymon</a>
            </div>
        </div>
    )
}