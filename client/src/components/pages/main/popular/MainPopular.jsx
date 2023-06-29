import React from 'react';
import './mainPopular.scss';

import runtrackImg from "../../../../assets/img/main/run_track_mini_1.jpg";
import cartWhite from "../../../../assets/icons/main/dump_white.png";
import cartOrange from "../../../../assets/icons/main/dump_orange.png";

import arrowLeft from "../../../../assets/icons/main/arrow_left.png";
import arrowRight from "../../../../assets/icons/main/arrow_right.png";

import { Navigation, Pagination, Grid } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/grid";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const MainPopular = () => {
    const popularToRender = Array(15).fill(null, 0, 15).map((item, i) => {
        return (
            <SwiperSlide key={i} className="popular__item">
                <div data-num = {`${i}`}>
                        <div className="item__img">
                            <img src={runtrackImg} alt="running_track"/>
                        </div>
                        <div className="item__descr">
                            <a href="good.html" className="item__name">BH Fitness F1 G6414V</a>
                            <div className="item__type">Беговая дорожка</div>
                            <div className="item__old-cost">64990 &#8381;</div>
                            <div className="item__order">
                                <img src={cartWhite} alt="dumster"/>
                                <div className="item__new-cost">64990 &#8381;</div>
                            </div>
                        </div>
                        <div className="item__hover-content hover-content-item">
                            <a href="good.html" className="hover-content-item__name">BH Fitness F1 G6414V</a>
                            <div className="hover-content-item__type">Беговая дорожка</div>
                            <div className="hover-content-item__subname">Тип беговой дорожки:</div>
                            <div className="hover-content-item__subtype">Электрическая</div>
                            <div className="hover-content-item__speed">Скорость движения (км/ч):</div>
                            <div className="hover-content-item__speed-value">22</div>
                            <div className="hover-content-item__transf">Складывание:</div>
                            <div className="hover-content-item__transf-value">Есть</div>
                            <div className="hover-content-item__dumpster cort-trigger">
                                <img src={cartOrange} alt="dumpster"/>
                            </div>
                            <div className="hover-content-item__old-cost">64990 &#8381;</div>
                            <div className="hover-content-item__order">
                                <div className="hover-content-item__in-stock">в наличии</div>
                                <div className="hover-content-item__new-cost">64990 &#8381;</div>
                            </div>
                        </div>
                </div>
            </SwiperSlide>
        )
    })
  return (
    <div className="main__popular">
        <div className="popular__header">
            <div className="popular__title">Популярные товары</div>
        </div>
        <Slider popularToRender={popularToRender} />
                
    </div>
  )
}

const Slider = ({popularToRender}) => {   
    return (
        <div className="popular__list-wrapper">
            <Swiper 
            slideClass='popular__item'
            modules={[Navigation, Pagination, Grid]}
            grid={{
                rows: 2,
                fill: "row"
                
            }}
            navigation={{
                prevEl: '.popular-arrow-prev',
                nextEl: '.popular-arrow-next',
            }}
            pagination={{
                el: '.popular-pagination',
                type: 'fraction',
                clickable: true
            }}
            slidesPerView={3}
            spaceBetween={30}
            // centeredSlides = {true}
            breakpoints={ 
                {
                    320: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2
                    },
                    // 400: {
                    //     slidesPerView: 2,
                    // },
                    // 630: {
                    //     slidesPerView: 3,
                    // },
                    1200: {
                        slidesPerView: 3,
                    }
                }
            }
            
            className="popular__list-slider">
                { popularToRender }
                
            
            </Swiper>
                <div className="popular-pagination"></div>
            <div className="popular-arrow-prev">
                <img src={arrowLeft} alt="" />
            </div>
            <div className="popular-arrow-next">
                <img src={arrowRight} alt="" />
            </div>
        </div>
    )
}
