import { IoLogoLinkedin } from "react-icons/io";
import { BsGithub, BsInstagram } from "react-icons/bs";

import ThemeMode from "../buttons/ThemeMode";

const Navbar = ({ color }) => {

    return (
        <nav className={
                `${color ? 'flex flex-row justify-between items-center fixed top-1 left-1 right-1 bg-blue-900/95 p-5 h-20 transition-all duration-500 rounded-xl z-50'
                : 
                'flex flex-row justify-between items-center fixed top-0 left-0 right-0 bg-transparent p-5 h-20 w-full transition-all duration-500'}`}>
                {/* {color ? */}
                <div>
                    <img
                        src="img/logoFinal.png"
                        alt="Logo"
                        className="h-[150px] md:h-[220px]  rotate-logo" />
                </div>
                {/* :
                <div className="flex justify-center items-center">
                    <img
                        src="img/logoNova3.png"
                        alt="Logo"
                        className="h-[50px] md:h-[70px] rotate-logo"
                        />
                    <img
                        src="img/logoName.png"
                        alt="Logo"
                        className="hidden md:block md:w-[150px] ml-2" />
                </div>
            } */}

            <ul className={` ${color ? 'text-white' : ''}
                    hidden sm:flex flex-row w-1/3 justify-center 
                    font-light  dark:text-gray-400`}>

                <li>
                    <a href="#top"
                        className="
                            ml-10 hover:border-b-2 
                            hover:dark:text-white">
                        Inicio</a>
                </li>

                <li>
                    <a href="#about"
                        className="
                        ml-10 hover:border-b-2 
                        hover:dark:text-white">
                        Sobre</a>
                </li>

                <li>
                    <a href="#projects"
                        className="
                        ml-10 hover:border-b-2 
                        hover:dark:text-white">
                        Projetos</a>
                </li>

                <li>
                    <a href="#footer"
                        className="
                        ml-10 hover:border-b-2 
                        hover:dark:text-white">
                        Contato
                    </a>
                </li>

            </ul>

            <ul className="
                    flex flex-row w-1/3 justify-around text-gray-400
                    sm:w-1/6">

                <li>
                    <a href="https://www.linkedin.com/in/tiago-oliveira-49a2a6205/" rel="external"
                        className="text-xl hover:text-blue-600"><IoLogoLinkedin />
                    </a>
                </li>

                <li className="mx-1 md:ml-0">
                    <a href="https://github.com/TiagoOliverDev" rel="external"
                        className={` ${color ? 'hover:text-white' : 'hover:text-black'}
                            text-xl dark:hover:text-white`}
                        ><BsGithub />
                    </a>
                </li>

                <li className="mx-1 pr-2 md:ml-0">
                    <a href="https://www.instagram.com/dev.tiago.oliver" rel="external"
                        className="text-xl hover:text-rose-500"><BsInstagram />
                    </a>
                </li>

                <li className="border-l border-gray-500 pl-3 ml-1 lg:pl-5">
                    <ThemeMode />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
