import { LinkedinLogo } from "@phosphor-icons/react";
import { Container } from "../components/Container";
import { Title } from "../components/Title";

export function Contact() {
    return(
        <Container
            id="#contact"
            background="secondary"
            orientation="col"
            size="full"
            className="my-0 py-20"
        >
            <Title
                label="Vamos trabalhar juntos?"
                color="secondary"
                className="mb-0"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 max-w-[1000px] gap-8 mx-auto py-8 md:px-14 lg:px-0">
                {/* <div className="flex flex-col items-center gap-2">
                    <h1 className="text-2xl font-bold text-white text-center">Vamos trabalhar juntos!</h1>
                    <p className="text-sm font-light text-center text-white">Entre em contato comigo ou pelo e-mail ou pelo telefone (Whatsapp) e vamos conversar sobre sua ideia e tirar ela do papel!</p>
                </div> */}
                <div className="flex flex-col items-center gap-1">
                    <h1 className="text-2xl font-bold text-white">Telefone</h1>
                    <p className="text-sm font-light text-center text-white">+55 16 98818-6124</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <h1 className="text-2xl font-bold text-white">E-mail</h1>
                    <p className="text-sm font-light text-center text-white">lucasrabelodesouza8@gmail.com</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <h1 className="text-2xl font-bold text-white">Redes sociais</h1>
                    <div className="flex items-center justify-between gap-3">
                        <a href="https://www.linkedin.com/in/lucasrabelos/" target="_blank">
                            <LinkedinLogo size={28} color="#FFF" weight="fill" className="cursor-pointer hover:opacity-60 duration-300" />
                        </a>
                    </div>
                </div>
                {/* <ContactForm /> */}
            </div>
        </Container>
    )
}