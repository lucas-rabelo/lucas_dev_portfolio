import { useState } from "react";

import { Container } from "../components/Container";
import { Title } from "../components/Title";
import { Filter } from "../components/Filter/Filter";
import { ProjectItem } from "../components/Projectitem";

import { projects } from "../utils/projects";
import { Button } from "../components/Button";

export function Projects() {
    const [developmentId, setDevelopmentId] = useState<string>('');
    const [visibleItems, setVisibleItems] = useState<number>(3);

    function handleSetFilter(id: string) {
        if(developmentId === id) {
            setVisibleItems(3);
        }
        setDevelopmentId(prevState => prevState === id ? '' : id);
    }

    function handleLoadMoreProjects() {
        setVisibleItems(prevState => prevState + 3);
    }

    return(
        <Container
            id="#projects"
            orientation="col"
            background="secondary"
            className="py-10 mb-0"
        >
            <Title 
                label="Meus projetos"
                color="secondary"
            />

            <Filter 
                buttonActived={developmentId}
                handleChangeFilter={handleSetFilter}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-4 px-8">
                {projects
                    .slice(0, visibleItems)
                    .filter(project => {
                        return developmentId === '' || project.development.includes(developmentId)
                    })
                    .map(project => (
                        <ProjectItem 
                            id={project.id}
                            image={project.image}
                            tags={project.tags}
                            development={project.development}
                            title={project.title}
                            description={project.description}
                            linkPreview={project.linkPreview}
                            linkGithub={project.linkGithub}
                        />
                    )
                )}
            </div>

            {visibleItems < projects.length && 
                <Button
                    label="Ver mais"
                    color="secondary"
                    hasIcon={false} 
                    onClick={handleLoadMoreProjects}
                />
            }
        </Container>
    );
}