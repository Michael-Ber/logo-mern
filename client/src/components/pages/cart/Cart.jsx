import React, { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './cart.scss';

import sub from "../../../assets/icons/order/sub.png";
import add from "../../../assets/icons/order/add.png";

import { CartItem } from './CartItem';

export const Cart = () => {

  const { user } = useSelector(state => state.authSlice);

  const btnsRef = useRef(null);
  const contentsRef = useRef(null);

  
  const [activeTab, setActiveTab] = useState('fast');

  useEffect(() => {
  }, [])

  const handleTabs = (e) => {
    Array.from(btnsRef.current.children)
      .forEach(btn => btn.classList.remove('tabs-order__btn_active')); 
    Array.from(contentsRef.current.children)
      .forEach(content => content.classList.remove('order-main__form_active'));
    
    e.target.classList.add('tabs-order__btn_active');
    document.querySelector(`form[data-order = ${e.target.dataset.order}]`).classList.add('order-main__form_active');
    setActiveTab(e.target.dataset.order);
    
  }

  const orderElements = (user && user.cart.length > 0) && user.cart.map(item => {
    return (
      <CartItem key={item._id} item={item} />
    )
  })

  return (
    <div className='main'>
      <h1 className="main__cort-title title-cort">Оформление заказа</h1>
      <div className="main__order order-main"> 
          <div ref={btnsRef} className="order-main__tabs tabs-order">
              <button 
                onClick={e => handleTabs(e)}
                className="tabs-order__btn tabs-order__btn_active" 
                data-order="fast" 
                aria-label="fast order button">Быстрый заказ</button>
              <button 
                onClick={e => handleTabs(e)}
                className="tabs-order__btn" 
                data-order="moscow" 
                aria-label="in moscow button">Курьером по москве и мо</button>
              <button 
                onClick={e => handleTabs(e)}
                className="tabs-order__btn" 
                data-order="regions" 
                aria-label="regions button">Доставка в регионы</button>
          </div>
          <div ref={contentsRef} className="order-main__content">
              <form action="#" className="order-main__form" data-order="regions">
                  <div className="main__data">
                      <div className="order-main__left">
                          <label htmlFor="surname" className="order-main__label">
                              <span>Фамилия:<span className="order-main__star"> *</span></span>
                              <input required name="surname" id="surname" type="text" className="order-main__input"/>
                          </label>
                          <label htmlFor="name" className="order-main__label">
                              <span>Имя:<span className="order-main__star"> *</span></span>
                              <input required name="name" id="name" type="text" className="order-main__input"/>
                          </label>
                          <label htmlFor="lastname" className="order-main__label">
                              <span>Отчество:<span className="order-main__star"> *</span></span>
                              <input required name="lastname" id="lastname" type="text" className="order-main__input"/>
                          </label>
                          <label htmlFor="phone" className="order-main__label">
                              <span>Моб. телефон:<span className="order-main__star"> *</span></span>
                              <input required name="phone" id="phone" type="number" className="order-main__input"/>
                          </label>
                          <label htmlFor="mail" className="order-main__label">
                              <span>Ваш E-mail:<span className="order-main__star"> *</span></span>
                              <input required name="mail" id="mail" type="text" className="order-main__input"/>
                          </label>
                          <label htmlFor="payment" className="order-main__label order-main__label_select">
                              Способ оплаты:
                              <select name="payment" id="payment" className="order-main__input order-main__input_select">
                                  <option value="1" className="order-main__option">Через Сбербанк</option>
                                  <option value="2" className="order-main__option">option-2</option>
                                  <option value="3" className="order-main__option">option-3</option>
                                  <option value="4" className="order-main__option">option-4</option>
                                  <option value="5" className="order-main__option">option-5</option>
                              </select>
                          </label>
                          <label htmlFor="index" className="order-main__label">
                              <span>Индекс<span className="order-main__star"> *</span></span>
                              <input required name="index" id="index" type="number" className="order-main__input"/>
                          </label>
                          <label htmlFor="city" className="order-main__label">
                              <span>Город<span className="order-main__star"> *</span></span>
                              <input required name="city" id="city" type="text" className="order-main__input"/>
                          </label>
                          <label htmlFor="address" className="order-main__label">
                              <span>Адрес доставки:<span className="order-main__star"> *</span></span>
                              <input required name="address" id="address" type="text" className="order-main__input"/>
                          </label>
                          <label htmlFor="comments" className="order-main__label">
                              Комментарии:
                              <textarea name="comments" id="comments" type="text" className="order-main__input order-main__input_textarea"></textarea>
                          </label>
                          <label htmlFor="subscribe" className="order-main__label order-main__label_checkbox label-order">
                              <input name="subscribe" id="subscribe" type="checkbox" className="order-main__checkbox"/>
                              <span className="label-order__span">Подписаться на новости и скидки </span> 
                          </label>
                      </div>
                      <div className="order-main__right">
                          <p><span>*</span> Поля, обязательные для заполнения</p>
                          <br/>
                          <p>Отправка товара производится только после 100% оплаты
                              товара. Стоимость доставки возможно оплатить при 
                              получении заказа.
                              <br/>
                              Доставка в регионы осуществляется EMS Почтой России 
                              (в течение 5-14 дней) и курьерской службой DPD (в течение 
                              3-5 дней) с момента передачи заказа в службу доставки. 
                              Стоимость зависит от веса заказа и расстояния. В некоторые 
                              регионы доставка возможна только посредством EMS Почты 
                              России, способ доставки уточняйте у оператора при 
                              оформлении заказа*.
                              <br/>
                              * Интернет-магазин не несет ответственности за задержку 
                              доставки заказа, связанную с работой курьерских служб DPD 
                              и EMS Почты России.</p>
                      </div>
                  </div>
                  <div className="main__yourOrder yourOrder-main">
                      <h2 className="yourOrder-main__title title-cort">Ваш заказ</h2>
                      <ul className="yourOrder-main__list">
                        { activeTab === 'regions' &&  orderElements }
                      </ul>
                      <div className="yourOrder-main__sum">
                          <span>Итого:</span> <strong>0</strong> &#8381;
                      </div>
                      <button type="submit" className="yourOrder-main__submit">оформить заказ</button>
                  </div>
              </form>
              <form action="#" className="order-main__form order-main__form_active" data-order="fast">
                  <div className="main__data">
                      <div className="order-main__left">
                          <label htmlFor="name-short" className="order-main__label">
                              <span>Имя:<span className="order-main__star"> *</span></span>
                              <input required name="name-short" id="name-short" type="text" className="order-main__input"/>
                          </label>
                          <label htmlFor="phone-short" className="order-main__label">
                              <span>Моб. телефон:<span className="order-main__star"> *</span></span>
                              <input required name="phone-short" id="phone-short" type="text" className="order-main__input"/>
                          </label>
                          <label htmlFor="mail-short" className="order-main__label">
                              <span>Ваш E-mail:<span className="order-main__star"> *</span></span>
                              <input required name="mail-short" id="mail-short" type="text" className="order-main__input"/>
                          </label>
                          <label htmlFor="subscribe-short" className="order-main__label order-main__label_checkbox label-order">
                              <input name="subscribe-short" id="subscribe-short" type="checkbox" className="order-main__checkbox"/>
                              <span className="label-order__span">Подписаться на новости и скидки</span> 
                          </label>
                      </div>
                      <div className="order-main__right">
                          <p><span>*</span> Поля, обязательные для заполнения</p>
                          <br/>
                          <p>Отправка товара производится только после 100% оплаты
                              товара. Стоимость доставки возможно оплатить при 
                              получении заказа.
                              <br/>
                              * Интернет-магазин не несет ответственности за задержку 
                              доставки заказа, связанную с работой курьерских служб DPD 
                              и EMS Почты России.</p>
                      </div>
                  </div>
                  <div className="main__yourOrder yourOrder-main">
                      <h2 className="yourOrder-main__title title-cort">Ваш заказ</h2>
                      <ul className="yourOrder-main__list">
                        { activeTab === 'fast' && orderElements }
                      </ul>
                      <div className="yourOrder-main__sum">
                          <span>Итого:</span> <strong>0</strong> &#8381;
                      </div>
                      <button type="submit" className="yourOrder-main__submit">оформить заказ</button>
                  </div>
              </form>
              <form action="#" className="order-main__form" data-order="moscow">
                  <div className="main__data">
                      <div className="order-main__left">
                          <label htmlFor="name-moscow" className="order-main__label">
                              <span>Имя:<span className="order-main__star"> *</span></span>
                              <input required name="name-moscow" id="name-moscow" type="text" className="order-main__input"/>
                          </label>
                          <label htmlFor="phone-moscow" className="order-main__label">
                              <span>Моб. телефон:<span className="order-main__star"> *</span></span>
                              <input required name="phone-moscow" id="phone-moscow" type="text" className="order-main__input"/>
                          </label>
                          <label htmlFor="mail-moscow" className="order-main__label">
                              <span>Ваш E-mail:<span className="order-main__star"> *</span></span>
                              <input required name="mail-moscow" id="mail-moscow" type="text" className="order-main__input"/>
                          </label>
                          <label htmlFor="subscribe-moscow" className="order-main__label order-main__label_checkbox label-order">
                              <input name="subscribe-moscow" id="subscribe-moscow" type="checkbox" className="order-main__checkbox"/>
                              <span className="label-order__span">Подписаться на новости и скидки</span> 
                          </label>
                      </div>
                      <div className="order-main__right">
                          <p><span>*</span> Поля, обязательные для заполнения</p>
                          <br/>
                          <p>Отправка товара производится только после 100% оплаты
                              товара. Стоимость доставки возможно оплатить при 
                              получении заказа.
                              <br/>
                              * Интернет-магазин не несет ответственности за задержку 
                              доставки заказа, связанную с работой курьерских служб DPD 
                              и EMS Почты России.</p>
                      </div>
                  </div>
                  <div className="main__yourOrder yourOrder-main">
                      <h2 className="yourOrder-main__title title-cort">Ваш заказ</h2>
                      <ul className="yourOrder-main__list">
                          { activeTab === 'moscow' && orderElements }
                      </ul>
                      <div className="yourOrder-main__sum">
                          <span>Итого:</span> <strong>0</strong> &#8381;
                      </div>
                      <button type="submit" className="yourOrder-main__submit">оформить заказ</button>
                  </div>
              </form>
          </div>
      </div>
    </div>
  )
}
