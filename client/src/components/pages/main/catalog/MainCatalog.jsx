import React from 'react';
import './mainCatalog.scss';

import tableImg from "../../../../assets/img/main/table_tennis.jpg";

export const MainCatalog = () => {
  return (
        <div className="main__catalog">
            <div className="catalog__header">
                <span className="catalog__title">
                    Каталог товаров
                </span>
                <div className="catalog__burger burgerBtn">
                    <span className="catalog__burger-btn-line"></span>
                    <span className="catalog__burger-btn-line"></span>
                    <span className="catalog__burger-btn-line"></span>
                </div>
            </div>
            <ul className="catalog__list">
                <li data-popup="0" className="catalog__item catalog__item_parent">
                    <span>Беговые дорожки</span> 
                </li>
                <li data-popup="0" className="catalog__item  catalog__item_parent">
                    <span>Эллиптические тренажеры</span>
                </li>
                <li className="catalog__item"><span>Велотренажеры</span></li>
                <li className="catalog__item"><span>Гребные тренажеры</span></li>
                <li className="catalog__item"><span>Вибромассажеры</span></li>
                <li data-popup="0" className="catalog__item  catalog__item_parent">
                    <span>Теннисные столы</span>
                </li>
                <li className="catalog__item"><span>Баскетбол</span></li>
                <li data-popup="0" className="catalog__item  catalog__item_parent">
                    <span>Массажные кресла</span>
                </li>
                <li data-popup="0" className="catalog__item  catalog__item_parent">
                    <span>Массажные столы</span>
                </li>
                <li className="catalog__item"><span>Силовые тренажеры</span></li>
                <li className="catalog__item"><span>Батуты</span></li>
                <li className="catalog__item"><span>Детские городки</span></li>
                <li className="catalog__item"><span>Дачная мебель</span></li>
                <li className="catalog__item"><span>Уличные спортивные комплексы</span></li>
                <li className="catalog__item"><span>Аксессуары</span></li>
            </ul>

            <div data-popup="0" className="main__popup">
                <div className="main__popup-close">&#10006;</div>
                <ul className="popup__list">
                    <li className="popup__item">
                        <span>Всепогодный</span>
                    </li>
                    <li className="popup__item">
                        <span>Для помещений</span>
                    </li>
                    <li className="popup__item">
                        <span>Профессиональный</span>
                    </li>
                    <li className="popup__item">
                        <span>Любительский</span>
                    </li>
                </ul>
                <div className="popup__dayproduct">
                    <div className="dayproduct__title">Товар дня</div>
                    <div className="dayproduct__image">
                        <img src={tableImg} alt="tennis_table"/>
                    </div>
                    <div className="dayproduct__descr">
                        <a href="#" className="dayproduct__link">Домашний теннисный стол 
                            Donic Indoor Roller 800 Green</a>
                    </div>
                    <div className="dayproduct__buy">
                        <div className="dayproduct__dump"></div>
                        <div className="dayproduct__cost">64 990 &#8381</div>
                    </div>
                </div>
            </div>
        </div>
  )
}
