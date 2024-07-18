import { Container } from "../components/Container";
import { ServiceItem } from "../components/ServiceItem";
import { Title } from "../components/Title";

export function Services() {
    return(
        <Container
            id="#services"
            orientation='col'
            background="primary"
        >
            <Title
                label="Meus serviços"
                color='primary'
            />

            <div className="flex flex-wrap w-full justify-center gap-8">
                <ServiceItem 
                    titleLabel="Criação de Websites"
                    textLabel="Eleve sua presença online com meus serviços de criação de websites. Ofereço design responsivo, SEO avançado, e sites rápidos e seguros. Personalizo cada projeto para atender suas necessidades, garantindo uma experiência de usuário superior em todos os dispositivos. Meus serviços incluem desenvolvimento de sites customizados, e-commerce, manutenção, e otimização SEO. Beneficie-se com maior visibilidade, credibilidade e conversões. Transforme seu negócio com um site profissional que atrai e engaja visitantes."
                    color="primary"
                />

                <ServiceItem 
                    titleLabel="Criação de Sistemas"
                    textLabel="Transforme seu negócio com meus serviços de criação de sistemas web personalizados. Desenvolvo soluções robustas, seguras e escaláveis, adaptadas às suas necessidades específicas. Ofereço sistemas integrados com design intuitivo, desempenho otimizado e SEO avançado. Meus serviços incluem desenvolvimento de sistemas sob medida, manutenção contínua, e integração de API. Beneficie-se com maior eficiência, automação de processos e melhor gestão de dados. Eleve sua empresa a um novo patamar com um sistema web que impulsiona resultados."
                    color="secondary"
                />

                <ServiceItem 
                    titleLabel="Criação de aplicativos"
                    textLabel="Eleve seu negócio com meus serviços de criação de aplicativos personalizados. Desenvolvo apps inovadores, responsivos e seguros, adaptados às suas necessidades específicas. Ofereço design intuitivo, desempenho otimizado e integração completa com suas plataformas. Meus serviços incluem desenvolvimento de aplicativos customizados, manutenção contínua e atualização regular. Beneficie-se com maior engajamento, presença digital e satisfação dos usuários. Transforme sua ideia em um aplicativo de sucesso que atrai e retém clientes."
                    color="primary"
                />
            </div>
        </Container>
    );
}