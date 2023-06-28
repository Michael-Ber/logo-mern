import React from 'react';
import './mainPopular.scss';

import runtrackImg from "../../../../assets/img/main/run_track_mini_1.jpg";
import cartWhite from "../../../../assets/icons/main/dump_white.png";
import cartOrange from "../../../../assets/icons/main/dump_orange.png";

export const MainPopular = () => {
  return (
    <div className="main__popular">
        <div className="popular__header">
            <div className="popular__title">Популярные товары</div>
            <div className="popular-arrow-prev"></div>
            <div className="popular-arrow-next"></div>
            <div className="popular__pagination">
            </div>
        </div>
        <div className="popular__list-wrapper">
            <div className="popular__list-slider">
                <ul className="popular__list-item popular__list-item_active">
                    <li className="popular__item">
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
                    </li>
                    <li className="popular__item">
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
                    </li>
                </ul>
                {/* <ul className="popular__list-item swiper-slide">
                    <li className="popular__item">some item 2</li>
                </ul>
                <ul className="popular__list-item swiper-slide">
                    <li className="popular__item">some item 3</li>
                </ul>
                <ul className="popular__list-item swiper-slide">
                    <li className="popular__item">some item 4</li>
                </ul>
                <ul className="popular__list-item swiper-slide">
                    <li className="popular__item">some item 5</li>
                </ul> */}
                
            </div>
        </div>
    </div>
  )
}
