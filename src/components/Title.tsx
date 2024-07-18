import { VariantProps, tv } from "tailwind-variants";

const title = tv({
    base: "font-bold text-center text-3xl capitalize",
    variants: {
        color: {
            primary: 'text-purple-800',
            secondary: 'text-white'
        },
    }
})

type Props = VariantProps<typeof title> & {
    label: string;
    className?: string;
}

export function Title({ label, color, className }: Props) {
    return(
        <h1 className={title({ color, class: className })}>{label}</h1>
    );

}