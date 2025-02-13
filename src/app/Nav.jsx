import { FaFacebookF, FaInstagram, FaTiktok, FaGithub } from "react-icons/fa";

export default function Nav() {
    return (<div>
        <div className="absolute inset-0 opacity-100 bg-gradient-to-t from-black to-transparent z-0 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full flex items-center justify-between pl-10 pr-10 pt-5 text-white z-[50]">

            <h2 className="font-bold text-xl xl:text-4xl ">CHETNIPHAT</h2>
            <div className="flex items-center ml-5 sm:ml-0 2xl:space-x-10 space-x-1">
                <a
                    href="https://github.com/SKICKBom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400 p-2 inline-flex">
                    <FaGithub size={24} className="sm:size-8 lg:size-9" />
                </a>
                <a
                    href="https://www.instagram.com/bom.chetniphat/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400 p-2 inline-flex">
                    <FaInstagram size={24} className="sm:size-8 lg:size-9" />
                </a>
                <a
                    href="https://www.facebook.com/share/1BEXbYgibJ/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400 p-2 inline-flex">
                    <FaFacebookF size={24} className="sm:size-8 lg:size-9" />
                </a>
            </div>
        </div>
    </div>
    );
}