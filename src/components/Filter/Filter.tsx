import { FilterItem } from "./FilterItem";

type Props = {
    buttonActived: string;
    handleChangeFilter: (id: string) => void;
}

export function Filter({ buttonActived, handleChangeFilter }: Props) {
    
    const buttonsFilters = [
        { id: 'Front', label: 'Front-end' },
        { id: 'Back', label: 'Back-end' },
        { id: 'Mobile', label: 'Mobile' },
        { id: 'Full', label: 'Fullstack' }
    ];

    return(
        <div className="flex flex-wrap items-center justify-center gap-2">
            {buttonsFilters.map(button => (
                <FilterItem 
                    id={button.id}
                    label={button.label}
                    actived={buttonActived === button.id ? true : false}
                    onClick={() => handleChangeFilter(button.id)}
                />
            ))}
        </div>
    );
}