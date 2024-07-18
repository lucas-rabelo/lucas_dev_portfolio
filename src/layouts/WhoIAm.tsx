import PerfilJpeg from '../assets/perfil.jpeg';

import { Button } from "../components/Button";
import { Container } from '../components/Container';
import { Title } from '../components/Title';

export function WhoIAm() {

    function handleScrollTo(id: string) {
        const divSelected = document.getElementById(id);
        if(divSelected) {
            divSelected.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return(
        <Container
            id="#whoIAm"
            background="primary"
            orientation={{
                initial: 'col',
                sm: 'col',
                md: 'row',
                lg: 'row',
                '2xl': 'row'
            }}
            size="full"
            className='max-w-[1200px] justify-between'
        >
            <div className="flex flex-col items-start gap-4 w-full lg:w-[700px] p-8 lg:p-0">
                <Title 
                    label="Quem sou?"
                    color='primary'
                />
                <p className="text-base">
                    Meu nome é Lucas, tenho 24 anos e 4 anos de experiência com o desenvolvimento web e mobile. Sempre muito apaixonado pela tecnologia e sempre em busca de trazer solução que atendam as expectativas dos clientes e usuários.
                </p>
                <p className="text-base">
                    Comecei minha carreira usando o PHP para o desenvolvimento web de sistemas, e depois comecei a criar aplicativos para serem um auxilio para os sistemas em PHP, após fazer isso minha paixão por aprender mais sobre o Javascript aumentou muito.
                </p>
                <p className="text-base">
                    Desde então sempre estou aprendendo mais sobre os frameworks React, react Native, NextJs, NodeJs, NestJs, e muito mais, para assim entregar um produto com a melhor qualidade e satisfação para os usuários.
                </p>
                <Button
                    color='primary'
                    label="Entrar em contato"
                    onClick={() => handleScrollTo('#contact')}
                />
            </div>
            <img 
                src={PerfilJpeg} 
                alt="Foto do lucas desenvolvedor" 
                className="rounded-[30%] object-contain w-full md:w-1/2 lg:w-[30%] px-8 lg:px-0"
            />
        </Container>
    );
}