import { useEffect, useRef, useState } from "react";
import { ArrowCircleUp } from "@phosphor-icons/react";

export function ButtonBackHome() {
    const buttonRef = useRef(null);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        function handleScroll() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            console.log('handleScroll', scrollTop);
            setIsVisible(scrollTop > 0);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    function handleScrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    if(isVisible) {
        return(
            <button ref={buttonRef} onClick={handleScrollToTop} className="fixed bottom-6 right-6 rounded-full p-3 hover:opacity-60 duration-300 bg-gradient-to-r from-purple-700 to-violet-950">
                <ArrowCircleUp size={32} color="#FFF" />
            </button>
        );
    }
}