import { ReactNode } from "react";
import { VariantProps, tv } from "tailwind-variants";

const container = tv(
    {
        base: "mx-auto my-16 gap-8",
        variants: {
            background: {
                primary: 'transparent',
                secondary: 'bg-gradient-to-r from-purple-700 to-violet-950'
            },
            orientation: {
                col: "flex flex-col items-center",
                row: "flex flex-row justify-between items-center"
            },
            size: {
                full: "w-full",
                max: "max-w-[1000px]"
            }
        },
    },
    {
        responsiveVariants: ['sm', 'md', 'lg', '2xl']
    }
)

type Props = VariantProps<typeof container> & {
    id: string;
    children: ReactNode;
    className?: string;
}

export function Container({ id, children, size, orientation, background, className }: Props) {
    return(
        <section 
            id={id}
            className={container({ size, orientation, background, class: className })}
        >
            {children}
        </section>
    );
}