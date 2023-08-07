import React from 'react';
import '../../pages/Project/ProjectPage.css'
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

/* Img */
const proyectImg = require.context('../../img', true);

const Project = () => {
    return (
        <section className="proyectos" id="proyectos">
            <h2 className="heading">
                <FormattedMessage
                    id='projects'
                    defaultMessage='Projects'
                />
            </h2>
            <div className="proyect-site" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className='proyectos-slider mySwiper'
                >
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./granabasto.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Granabasto</h3>
                            <p>
                                E-commers
                            </p>
                            <p className="tecnologias">
                                React
                                <span> -</span> Bootstrap
                                <span> -</span> Laravel
                                <span> -</span> Mysql
                                <span> -</span> jQuery
                                <span> -</span> NodeJS
                            </p>
                            <a href="https://online.granabastos.com.co/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Granabasto</span></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./gea.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Gea</h3>
                            <p>
                                E-commers
                            </p>
                            <p className="tecnologias">
                                <span> -</span> Bootstrap
                                <span> -</span> Laravel
                                <span> -</span> Mysql
                                <span> -</span> jQuery
                                <span> -</span> NodeJS
                            </p>
                            <a href="https://gea-suite.naoweesuite.com/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Guajira Emprende</span></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./gateway.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3></h3>
                            <p>
                                Portal de Transacciones
                            </p>
                            <p className="tecnologias">
                                React
                                <span> -</span> Bootstrap
                                <span> -</span> Laravel
                                <span> -</span> Mysql
                                <span> -</span> jQuery
                                <span> -</span> NodeJS
                            </p>
                            <a href="http://gateway.naowee.com/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Gateway</span></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./vital.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Club De Leones</h3>
                            <p>
                                Aplicacion para la salud
                            </p>
                            <p className="tecnologias">
                            React
                                <span> -</span> Bootstrap
                                <span> -</span> Laravel
                                <span> -</span> Mysql
                                <span> -</span> jQuery
                                <span> -</span> NodeJS
                            </p>
                            <a href="https://vital.saludclubdeleones.com/login" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Vital</span></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./quiality.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Quiality Life</h3>
                            <p>
                                SISTEMA DE ADMINISTRACION DE SALUD
                            </p>
                            <p className="tecnologias">
                            React
                                <span> -</span> Bootstrap
                                <span> -</span> Laravel
                                <span> -</span> Mysql
                                <span> -</span> jQuery
                                <span> -</span> NodeJS
                            </p>
                            <a href="https://suite.qualitylife.com.co/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Quiality</span></a>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-pagination"></div>
            </div>
            {/* <Link className="custom-btn btn-codigo portafolio-btn" to="/project">
                <FormattedMessage
                    id='btn-more-projects'
                    defaultMessage='More projects'
                />
            </Link> */}
        </section>

    )
};
export default React.memo(Project);