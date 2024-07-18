import PerfilPhoto from '../assets/perfil.jpeg';
import { Container } from '../components/Container';

export function Home() {
    return(
        <Container
            id='#home'
            background="secondary"
            size="full"
            orientation="row"
            className="py-8 mt-0"
        >
            <div className="flex flex-col gap-8 md:flex-row md:px-12 items-center justify-between w-full mx-auto max-w-[1000px]">
                <div className="flex flex-col items-center gap-4">
                    <p className="font-normal text-white">
                        Olá, meu nome é
                    </p>

                    <h1 className="font-bold text-white uppercase text-3xl text-center">
                        Lucas Rabelo
                    </h1>

                    <p className="font-normal text-white">
                        Desenvolvedor Front-end
                    </p>
                </div>

                <img
                    className="rounded-[30%] object-contain w-60 md:w-48 lg:w-52 h-auto"
                    src={PerfilPhoto}
                />

                <div className="flex flex-col items-center gap-4">
                    <div className="flex flex-col items-center gap-2">
                        <h1 className="font-bold text-white text-4xl">+4</h1>
                        <p className="font-normal text-white">Anos de experiência</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <h1 className="font-bold text-cyan-300 text-4xl">7</h1>
                        <p className="font-normal text-white">Projetos concluídos</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <h1 className="font-bold text-white text-4xl">+10.000</h1>
                        <p className="font-normal text-white">Horas de trabalho</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}