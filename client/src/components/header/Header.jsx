import React from 'react';
import './header.scss';

import bgImg from "../../assets/img/main/header_bg.jpg";
import dump from "../../assets/icons/main/dump.png";

export const Header = () => {
  return (
    <header className="header">
        <img src={bgImg} alt="header_background" className="header__bg"/>
        <div className="container container_header">
            <div className="header__wrapper">
                <div className="header__main">
                    <nav className="header__nav">
                        <ul className="header__nav-list">
                            <li className="header__nav-wrapper">
                                <div className="header__nav-item">
                                    <a href="#" className="header__nav-link">Бренды</a>
                                </div>
                                <div className="header__nav-item">
                                    <a href="#" className="header__nav-link">Гарантия</a>
                                </div>
                            </li>
                            <li className="header__nav-wrapper">
                                <div className="header__nav-item">
                                    <a href="#" className="header__nav-link">Распродажа</a>
                                </div>
                                <div className="header__nav-item">
                                    <a href="#" className="header__nav-link">Оплата</a>
                                </div>
                            </li>
                            <li className="header__nav-wrapper">
                                <div className="header__nav-item">
                                    <a href="#" className="header__nav-link">Доставка и сборка</a>
                                </div>
                                <div className="header__nav-item">
                                    <a href="#" className="header__nav-link">Контакты</a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
                <a href="#" className="header__logo">
                    <div className="header__logo-title">LOGO</div>
                    <div className="header__logo-subtitle">Спортивный магазин</div>
                </a>
                <div className="header__auth">
                    <a href="#" className="header__auth-link">Вход /</a>
                    <a href="#" className="header__auth-link">Регистрация</a>
                </div>
                <div className="header__submain">
                    <ul className="header__tel-list">
                        <li className="header__tel-item">
                            <span>Москва</span>
                            <a href="tel:84991234567" className="header__tel-link">8-499-123-45-67</a>
                        </li>
                        <li className="header__tel-item">
                            <span>Бесплатно для России</span>
                            <a href="tel:88001234567" className="header__tel-link">8-800-123-45-67</a>
                        </li>
                    </ul>
                </div>
                <div class="burger">
                    <div class="burger-btn">
                        <span class="burger-btn-line"></span>
                        <span class="burger-btn-line"></span>
                        <span class="burger-btn-line"></span>
                    </div>
                    <div class="burger-menu">
                        <nav class="burger__nav burger__nav_sm">
                            <ul class="burger__nav-list burger__nav-list_sm">
                                <li class="burger__nav-item">
                                    <a href="#" class="burger__nav-link burger__nav-link_sm">Бренды</a>
                                </li>
                                <li class="burger__nav-item">
                                    <a href="#" class="burger__nav-link burger__nav-link_sm">Гарантия</a>
                                </li>
                                <li class="burger__nav-item">
                                    <a href="#" class="burger__nav-link burger__nav-link_sm">Распродажа</a>
                                </li>
                                <li class="burger__nav-item">
                                    <a href="#" class="burger__nav-link burger__nav-link_sm">Оплата</a>
                                </li>
                                <li class="burger__nav-item">
                                    <a href="#" class="burger__nav-link burger__nav-link_sm">Доставка и сборка</a>
                                </li>
                                <li class="burger__nav-item">
                                    <a href="#" class="burger__nav-link burger__nav-link_sm">Контакты</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="subheader">
                <div className="subheader__left">
                    <a href="#" className="subheader__link">Вход</a>
                    <a href="#" className="subheader__link">Регистрация</a>
                    <a href="#" className="subheader__link">sport@gmail.com</a>
                </div>
                <div className="subheader__right">
                    <a href="#" className="subheader__call">Обратный звонок</a>
                    <div className="subheader__opening">
                        <span>
                            <strong>Пн-Вт:</strong>
                            09:00-21:00
                        </span>
                        <span>
                            <strong>Сб-Вс:</strong>
                            10:00-20:00
                        </span>
                    </div>
                    <a href="cort.html" className="subheader__order">
                        <div className="subheader__dumpster">
                            <img src={dump} alt="dumpster"/>
                        </div>
                        <div className="subheader__counts counts-subheader">
                            <span className="counts-subheader__count">0</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        
    </header>
  )
}
