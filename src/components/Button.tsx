import { ArrowCircleRight } from "@phosphor-icons/react";
import { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

const button = tv({
    base: 'flex gap-2 items-center rounded-lg font-medium py-2 px-4 text-base',
    variants: {
        color: {
            primary: 'bg-purple-700 hover:bg-violet-950 duration-300 text-white',
            secondary: 'bg-white hover:bg-gray-300 duration-300 text-purple-700',
        }
    }
})

type Props = ComponentProps<"button"> & 
    VariantProps<typeof button> & {
    label: string;
    hasIcon?: boolean;
}

export function Button({ label, color, hasIcon = true, ...rest }: Props) {
    return(
        <button className={button({ color })} {...rest}>
            {label}
            {hasIcon && <ArrowCircleRight size={24} weight="fill" />}
        </button>
    )
}