import { Logos } from "../utils/logo";

export function Skills() {
    return(
        <div className="mx-auto relative my-16 overflow-hidden h-24 w-full">
            <div className="absolute flex lg:justify-center w-full animate-scroll">
                {Logos.map(logo => (
                    <img 
                        key={logo.key}
                        className="flex-shrink-0 mx-2 w-20 h-20 object-contain"
                        src={logo.img}
                        alt={logo.alt}
                    />
                ))}
                {Logos.map(logo => (
                    <img 
                        key={logo.key}
                        className="flex-shrink-0 mx-2 w-20 h-20 object-contain"
                        src={logo.img}
                        alt={logo.alt}
                    />
                ))}
                {Logos.map(logo => (
                    <img 
                        key={logo.key}
                        className="flex-shrink-0 mx-2 w-20 h-20 object-contain"
                        src={logo.img}
                        alt={logo.alt}
                    />
                ))}
                {/* {Logos.map(logo => (
                    <img 
                        key={logo.key}
                        className="flex-shrink-0 mx-2 w-20 h-20 object-contain"
                        src={logo.img}
                        alt={logo.alt}
                    />
                ))} */}
            </div>
        </div>
    )
}