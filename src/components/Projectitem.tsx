import { Eye, GithubLogo } from "@phosphor-icons/react";

export type ProjectItemProps = {
    id: string;
    image?: string;
    tags: string[];
    development: 'Front' | 'Back' | 'Mobile' | 'Full';
    title: string;
    description: string;
    linkPreview?: string;
    linkGithub: string;
}

export function ProjectItem({
    id,
    image,
    tags,
    title,
    description,
    linkPreview,
    linkGithub
}: ProjectItemProps) {
    return(
        <div key={id} className="overflow-hidden pb-5 rounded-xl flex flex-col gap-5 bg-white">
            {image ? 
                <img className="w-full object-cover h-[196.87px]" src={image} alt={`Imagem do projeto ${title}`} /> : 
                <div className="w-full h-[196.87px] bg-gray-400 flex items-center justify-center">
                    <p className="text-gray-700">Sem Image</p>
                </div> 
            }

            <div className="flex flex-col gap-5 flex-1">
                <div className="mx-5 flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <p key={index} className="rounded-full bg-purple-400 px-4 py-1 text-sm">{tag}</p>
                    ))}
                </div>

                <h1 className="mx-5 text-lg font-semibold">{title}</h1>

                <p className="mx-5 text-base">{description}</p>
            </div>

            <div className="flex items-center justify-center gap-2 mx-5">
                {linkPreview && <a href={linkPreview} target="_blank" className="flex w-full justify-center items-center gap-2 hover:opacity-60 duration-300 bg-purple-700 text-white rounded py-1 px-2">
                    <Eye weight="fill" color="#FFF" size={22} />
                    Visualizar
                </a>}
                <a href={linkGithub} className="flex w-full justify-center items-center gap-2 hover:opacity-60 duration-300 bg-purple-700 text-white rounded py-1 px-2">
                    <GithubLogo weight="fill" color="#FFF" size={22} />
                    Github
                </a>
            </div>
        </div>
    )
}