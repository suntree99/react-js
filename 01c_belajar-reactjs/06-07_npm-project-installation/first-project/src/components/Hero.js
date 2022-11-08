import Carousel from 'react-bootstrap/Carousel';
import hero1 from './../assets/hero-uniform.png'
import hero2 from './../assets/hero-ekskul.png'

const Hero = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={hero1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Seragam SMAN 1 Nusantara</h3>
                    <p>Seragam yang digunakan beserta atribut di SMAN 1 Nusantara.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={hero2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Ekstra Kurikuler SMAN 1 Nusantara</h3>
                    <p>Beragam ekstra kurikuler tersedia di SMAN 1 Nusantara.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Hero;