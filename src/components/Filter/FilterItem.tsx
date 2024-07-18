import { ComponentProps } from 'react';
import { VariantProps, tv } from 'tailwind-variants';

const button = tv({
    base: "border-[1px] border-white duration-300 rounded-full px-4 py-2",
    variants: {
        actived: {
            false: 'text-white hover:bg-white hover:text-purple-700',
            true: 'text-purple-700 bg-white'
        }
    }
})

type Props = VariantProps<typeof button> &
ComponentProps<"button"> & {
    id: string;
    label: string;
}

export function FilterItem({ id, label, actived, ...rest }: Props) {
    return(
        <button key={id} className={button({ actived })} {...rest}>
            {label}
        </button>
    );
}