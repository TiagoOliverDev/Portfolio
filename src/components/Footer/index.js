import { IoLogoLinkedin } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { RiTelegramLine } from "react-icons/ri";
import { BsGithub, BsInstagram } from "react-icons/bs";

const Footer = () => {

    return (
        <footer id="footer" className="
            flex flex-col justify-around items-start ml-5 mt-20 pb-5 h-full 
            text-gray-500 md:ml-0 md:flex-row md:items-center md:my-5">

            <div className=" w-full flex justify-center items-center mb-10 md:w-auto">
                <img
                    src="img/logoFinal.png"
                    alt="Logo"
                    className="h-[150px] md:h-[220px]" />
            </div>

            <div className="flex flex-col">

                <h4 className="text-xl text-gray-600 font-semibold underline">Contatos</h4>

                <a href="mailto:paulloholiveira77@gmail.com"
                    className="hover:text-blue-500 text-xl flex items-center">
                    <HiOutlineMail></HiOutlineMail>paulloholiveira77@gmail.com
                </a>
                <a href="https://wa.me/5584996553029" rel="noreferrer"
                    className="hover:text-green-500 text-xl flex items-center">
                    <AiOutlineWhatsApp></AiOutlineWhatsApp>WhatsApp
                </a>
                <a href="https://t.me/+5584996553029" rel="noreferrer"
                    className="hover:text-blue-600 text-xl flex items-center">
                    <RiTelegramLine></RiTelegramLine>Telegram
                </a>
            </div>

            <div className="flex flex-col">
                <h4 className="text-xl text-gray-600 font-semibold mt-5 underline">Redes sociais</h4>

                <ul className="
                    flex flex-col
                    justify-between">

                    <li>
                        <a href="https://www.linkedin.com/in/tiago-oliveira-49a2a6205/" rel="external"
                            className=" flex items-center text-xl hover:text-blue-600">
                            <IoLogoLinkedin /> Linkedin
                        </a>
                    </li>

                    <li>
                        <a href="https://github.com/TiagoOliverDev" rel="external"
                            className=" flex items-center text-xl hover:text-black dark:hover:text-white">
                            <BsGithub /> GitHub
                        </a>
                    </li>

                    <li>
                        <a href="https://www.instagram.com/dev.tiago.oliver/" rel="external"
                            className=" flex items-center text-xl hover:text-rose-500">
                            <BsInstagram /> Instagran
                        </a>
                    </li>

                </ul>
            </div>

        </footer>
    );
};

export default Footer;