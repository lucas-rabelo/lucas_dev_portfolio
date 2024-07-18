import Slider, { Settings } from 'react-slick';

import { Container } from "../components/Container";
import { TestemonyItem } from "../components/TestemonyItem";
import { Title } from "../components/Title";

export function Testimonies() {
    const settings: Settings = {
        className: 'py-4',
        slidesToShow: 3,
        dots: true,
        arrows: false,
        centerMode: true,
        autoplay: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return(
        <Container
            id="#testimonies"
            orientation='col'
            size='full'
            background="primary"
        >
            <Title
                label="Depoimentos"
                color='primary'
            />
            
            <div className="w-full">
                <Slider {...settings}>
                    {/* <TestemonyItem /> */}
                    <TestemonyItem />
                    <TestemonyItem />
                    <TestemonyItem />
                </Slider>
            </div>
        </Container>
    );
}