import { VariantProps, tv } from 'tailwind-variants';
import { Button } from './Button';

const service = tv({
    slots: {
        base: 'drop-shadow-2xl max-w-sm rounded-3xl p-6 flex flex-col items-center gap-6',
        title: 'font-semibold text-2xl text-center',
        text: 'text-base text-center'
    },
    variants: {
        color: {
            primary: {
                base: 'bg-white',
                title: 'text-purple-800',
                text: 'text-gray-500'
            },
            secondary: {
                base: 'bg-purple-700',
                title: 'text-white',
                text: 'text-white'
            }
        }
    },
    defaultVariants: {
        color: 'primary'
    }
});

type Props = VariantProps<typeof service> & {
    titleLabel: string;
    textLabel: string;
}

export function ServiceItem({ titleLabel, textLabel, color, ...rest }: Props) {
    const {
        base,
        text,
        title
    } = service();

    function handleScrollTo(id: string) {
        const divSelected = document.getElementById(id);
        if(divSelected) {
            divSelected.scrollIntoView({ behavior: 'smooth' });
        }
    }
   
    return(
        <div className={base({ color })} {...rest}>
            <h3 className={title({ color })}>{titleLabel}</h3>

            <p className={text({ color })}>{textLabel}</p>
        
            <Button
                label="Saiba mais"
                color={color}
                onClick={() => handleScrollTo('#contact')}
            />
        </div>
    );
}