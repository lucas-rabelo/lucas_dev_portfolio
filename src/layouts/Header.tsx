import { useState } from "react";
import { List, X } from "@phosphor-icons/react";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    function handleOpenMenu() {
        setIsOpen(prevState => !prevState);
    }

    function handleScrollTo(id: string) {
        const divSelected = document.getElementById(id);
        if(divSelected) {
            divSelected.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    }

    return(
        <>
            <header className="md:py-0 bg-gradient-to-r from-purple-700 to-violet-950 flex w-full bg-transparent">
                <nav className="hidden md:flex md:items-center md:justify-center md:gap-8 md:w-full">
                    <li className="list-none text-white font-semibold py-8 cursor-pointer"><a onClick={() => handleScrollTo("#home")}>Início</a></li>
                    <li className="list-none text-white font-semibold py-8 cursor-pointer"><a onClick={() => handleScrollTo("#services")}>Serviços</a></li>
                    <li className="list-none text-white font-semibold py-8 cursor-pointer"><a onClick={() => handleScrollTo("#whoIAm")}>Quem sou</a></li>
                    {/* <li className="list-none text-white font-semibold py-8 cursor-pointer"><a onClick={() => handleScrollTo("#testemonies")}>Depoimentos</a></li> */}
                    <li className="list-none text-white font-semibold py-8 cursor-pointer"><a onClick={() => handleScrollTo("#contact")}>Contato</a></li>
                </nav>

                <button 
                    className="p-4 justify-end md:hidden hover:bg-violet-950 transition-all durantion-300"
                    onClick={handleOpenMenu}
                >
                    { isOpen ? <X size={32} color="#FFF" /> : <List size={32} color="#FFF" />}
                </button>
            </header>
            {isOpen && 
                (<div className="absolute top-0 w-full bg-slate-800 transition-all ease-in duration-500">
                    <button
                        className="p-4 absolute"
                        onClick={handleOpenMenu}
                    >
                        { isOpen ? <X size={32} color="#FFF" /> : <List size={32} color="#FFF" />}
                    </button>
                    <nav className="flex flex-col items-center py-6 gap-8 w-full bg-slate-800 md:hidden">
                        <li className="list-none text-white font-semibold cursor-pointer"><a onClick={() => handleScrollTo("#home")}>Início</a></li>
                        <li className="list-none text-white font-semibold cursor-pointer"><a onClick={() => handleScrollTo("#services")}>Serviços</a></li>
                        <li className="list-none text-white font-semibold cursor-pointer"><a onClick={() => handleScrollTo("#whoIAm")}>Quem sou</a></li>
                        {/* <li className="list-none text-white font-semibold cursor-pointer"><a onClick={() => handleScrollTo("#testemonies")}>Depoimentos</a></li> */}
                        <li className="list-none text-white font-semibold cursor-pointer"><a onClick={() => handleScrollTo("#contact")}>Contato</a></li>
                    </nav>
                </div>)
            }
        </>
    )
}