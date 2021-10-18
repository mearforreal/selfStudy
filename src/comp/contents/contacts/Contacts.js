import React, { useState } from 'react'
import phone from "./imgContacts/phone.png";
import point from "./imgContacts/point.png";
import msg from "./imgContacts/msg.png";
import "./Contacts.css";
import emailjs from 'emailjs-com';
import Popup from './popup/Popup';


function Contacts() {

    const [modalActive,setModalActive] = useState(false);

    const sendEmail =(e) => {
        e.preventDefault();
        setModalActive(true)
        document.body.style.overflow ="hidden";
    
        emailjs.sendForm('service_lideyqt', 'template_i4eofwq', e.target, 'user_OUpYDOwmsCtouuBsOcLC7')
          .then((result) => {
              console.log(result.text);
            
                
          }, (error) => {
              console.log(error.text);
              setModalActive(false)
          });
          e.target.reset();
      }
   
    return (
        <div className="Contacts">
            <div className="container">
                <div className="content">
                    <div className="content__title">
                        <div className="content__title__name">
                            <p>КОНТАКТЫ</p>
                        </div>
                        <div className="content__title__stripe">
                       </div>
                    </div> 

                   <div className="content__wrapper">
                        <div className="content__text__box">
                            <p className="content__text__title">Мы проконсультируем вас</p>
                            <p className="content__text__subtitle">Если у вас есть вопросы о формате или вы не знаете что выбрать,
                        оставьте свой номер: мы позвоним, чтобы ответить на все ваши вопросы.</p>
                
                            <form onSubmitCapture={sendEmail} >
                               <input
                                className={"content__text__circle"}
                                placeholder={"Ваше имя"}
                               name={"name"}
                               type={"text"} 
                               required
                               />
                               <input
                               className={"content__text__circle"}
                               placeholder={"Телефон"}
                               name={"phone"}
                               type={"tel"}
                               required
                               />
                               <input 
                               className={"content__text__circle"}
                               placeholder={"Электронная почта"}
                               name={"email"}
                               type={"email"}
                               required
                               />
                               <input 
                               className={"content__text__circle content__text__circle--btn"}
                               type={"submit"} 
                               value={"Заказать консультацию"}
                               />
                            </form>
                           <p className="content__text__policy">Нажимая кнопку "Заказать консультацию" вы соглашаетесь с условиями
                        договора-оферты и политикой конфиденциальности</p>
                       </div> 
                       <div className="content__map" style={{position:"relative", overflow:"hidden"}}><a href="https://yandex.kz/maps/162/almaty/?utm_medium=mapframe&utm_source=maps" style={{color:"#eee", fontSize:"12px", position:"absolute", top:"0px"}}>Алматы</a>
                            <a href="https://yandex.kz/maps/162/almaty/house/Y08YfwdgSkIHQFppfX51c31rZQ==/?ll=76.900501%2C43.242096&utm_medium=mapframe&utm_source=maps&z=17.89" style={{color:"#eee", fontSize:"12px", position:"absolute", top:"14px"}}>Улица Клочкова, 55 — Яндекс.Карты</a><iframe src="https://yandex.kz/map-widget/v1/-/CCUUJRbHOC" width="612" height="640" frameborder="1" allowfullscreen="true" style={{position:"relative"}}></iframe>
                                <div className="content__map__pic">
                                    <p className="content__map__pic__text--1">Контакты</p>
                                        <ul >
                                            <li className="content__map__pic__text"> <img className="content__map__pic__point" src={point} alt="point" /><a  href="#" >Адрес: г. Алматы Клочкова 55</a></li>
                                            <li className="content__map__pic__text" ><img className="content__map__pic__phone" src={phone} alt="phone"/><a href="#">+7 705 842 42 42</a></li>
                                            <li className="content__map__pic__text" ><img className="content__map__pic__msg" src={msg} alt="message"/><a  href="#">Example@gmail.com</a></li>
                                       </ul>
                               </div>
                           </div>
                        </div> 
                   </div> 
                </div>
                <Popup active={modalActive} setActive={setModalActive}/>
           </div>
    )
}

export default Contacts
