import React, {useState} from 'react';
import Modal from 'react-modal';
import { CSSTransition } from 'react-transition-group';
import './CoursePage.scss';
import './fonts.scss';

function CoursePage() {
    const [modalIsOpen1, setModalIsOpen1] = useState(false);
    const [modalIsOpen2, setModalIsOpen2] = useState(false);
    const [modalIsOpen3, setModalIsOpen3] = useState(false);
    const [modalIsOpen4, setModalIsOpen4] = useState(false);
    const [modalIsOpen5, setModalIsOpen5] = useState(false);
    const [modalIsOpen6, setModalIsOpen6] = useState(false);

    return(
        <div className="course-content">
            <div className="course-wrapper">
                <div className="course-wrapper-inside">
                    <div id="course-wrapper-left">
                        <p>Курс UX/UI дизайнер</p>
                        
                        <div id="first">Научим делать удобные и стильные интерфейсы с нуля: вы пройдёте путь от создания макетов до оптимизации баз данных и алгоритмов. После обучения получите практический опыт и сможете развивать высоконагруженные проекты.</div>
                        
                        <div id="course-wrapper-button"><span>ЗАПИСАТЬСЯ НА КУРС</span></div>
                    </div>
                    <div id="course-wrapper-right">
                    </div>
                    <div id="course-wrapper-bottom">
                        <div id="course-when">
                            <p>Когда?</p>
                            <div className="inner">21 февраля-20 августа</div>
                        </div>
                        <div id="course-format">
                            <p>Формат</p>
                            <div className="inner">Вебинари + видеозаписи + Практические задания</div>
                        </div>
                        <div id="course-sertificate">
                            <p>Сертификат</p>
                            <div className="inner">По окончанию курса выдается сертификат о профессиональной подготовке </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`course-main ${modalIsOpen2 ? "active" : ""}`}>
                
                    <div id="course-section1">
                        <div id="course-info">
                            <p>Чем занимается UX/UI дизайнер</p>
                            <div id="info-content">UX/UI дизайнер  решает задачи пользователей и бизнеса: разрабатывает внешний облик сайтов и мобильных приложений, проектирует пользовательский опыт и анализирует целевую аудиторию. Он делает цифровые продукты полезными и удобными. Мы научим вас работать с Figma и другими инструментами дизайн-процесса.</div>
                        </div>
                        <div id="course-count">
                            <p>Столько компаний сейчас ищут UX/UI дизайнера</p>
                            <span>4000</span>
                        </div>
                        <div id="course-salary">
                            <p>Средний заработок по данным (hh)</p>
                            <span>350 000₸</span>
                        </div>
                    </div>
                    
                    <div id="course-section2">
                        <label>Как проходит обучение</label>
                        <div id="course-block1">
                            <div id="course-block1-img"></div>
                            <p>Сопровождение</p>
                            <div className="text">Каждый студент может общаться с экспертами курса, получать помощь координатора и наставников курса</div>
                        </div>
                        <div id="course-block2">
                            <div id="course-block2-img"></div>
                            <p>Карьера</p>
                            <div className="text">Центр развития карьеры поможет с составлением резюме и подготовит к собеседованию</div>
                        </div>
                        <div id="course-block3">
                            <div id="course-block3-img"></div>
                            <p>Онлайн занятия</p>
                            <div className="text">Обучение в формате видеолекций и вебинаров, которые также будут доступны в записи</div>
                        </div>
                        <div id="course-block4">
                            <div id="course-block4-img"></div>
                            <p>Практика</p>
                            <div className="text">В рамках блока — несколько практических домашних заданий с проверкой и обратной связью</div>
                        </div>
                    </div>
                    
                    <div id="course-section3">
                        <label>Программа курса</label>
                        <div className={`course-intro ${modalIsOpen1 ? "active" : ""}`}>
                            <div id="course-intro-title" className="course-section3-title-initial">Введение</div>
                                <div className={`course-btn ${modalIsOpen1 ? "active" : ""}`} >
                                    <div></div>
                                    <div></div>
                                </div>
                                <div className="course-intro-hidden">
                                    <CSSTransition 
                                    in={modalIsOpen1}
                                    timeout={300}
                                    classNames="course-hidden-section"
                                    mountOnEnter
                                    unmountOnExit
                                    >
                                    </CSSTransition>
                            </div>
                        </div>
                        <div className={`course-adobe ${modalIsOpen2 ? "active" : ""}`}>
                            <div id="course-adobe-title" className="course-section3-title-initial">Основы Adobe Photoshop</div>
                            <div className={`course-btn ${modalIsOpen2 ? "active" : ""}`} for="second" onClick={() => {setModalIsOpen2(!modalIsOpen2);}}>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="course-adobe-hidden">
                                <CSSTransition 
                                in={modalIsOpen2}
                                timeout={100}
                                classNames="course-hidden-section"
                                mountOnEnter
                                unmountOnExit
                                >
                                    <div>
                                        <div className="course-adobe-additional">10 занятий</div>
                                        <div id="course-adobe-additional-second" className="course-adobe-additional">20 часов</div>
                                        <div id="course-adobe-show">
                                            Если вы никогда раньше не открывали Photoshop, то в подготовительном модуле получите необходимую базу для работы с фотографиями и дизайн-макетами. Вы познакомитесь с ключевыми инструментами приложения и сразу примените их на практике. В каждом занятии — задание для самостоятельной тренировки.
                                        </div>  
                                        <div id="course-adobe-list">
                                            <div className="course-adobe-list-item"><div></div>Введение в Photoshop</div>
                                            <div className="course-adobe-list-item"><div></div>Двойная экспозиция</div>
                                            <div className="course-adobe-list-item"><div></div>Ретушь и цветокоррекция</div>
                                            <div className="course-adobe-list-item"><div></div>Постер</div>
                                            <div className="course-adobe-list-item"><div></div>Тонированное изображение</div>
                                            <div className="course-adobe-list-item"><div></div>Сайт в Photoshop</div>
                                            <div className="course-adobe-list-item"><div></div>Мокап</div>
                                            <div className="course-adobe-list-item"><div></div>Gif-анимация</div>
                                            <div className="course-adobe-list-item"><div></div>Иллюстрация</div>
                                        </div>
                                    </div>
                                </CSSTransition>
                            </div>
                        </div>
                        
                        <div className={`course-webdesign ${modalIsOpen3 ? "active" : ""}`}>
                        <div id="course-webdesign-title" className="course-section3-title-initial">Веб-дизайн</div>
                            <div className={`course-btn ${modalIsOpen3 ? "active" : ""}`} onClick={() => {setModalIsOpen3(!modalIsOpen3);}}>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="course-webdesign-hidden">
                                <CSSTransition 
                                in={modalIsOpen3} 
                                timeout={300}
                                classNames="course-hidden-section"
                                mountOnEnter
                                unmountOnExit
                                >
                                    <div id={`course-webdesign-hidden ${!modalIsOpen3 && "course-display_none"}`}>
                                        
                                    </div>   
                                </CSSTransition>
                            </div>
                        </div>
                        <div className={`course-mobile ${modalIsOpen4 ? "active" : ""}`}>
                        <div id="course-mobile-title" className="course-section3-title-initial">Дизайн мобильных интерфейсов</div>
                            <div className={`course-btn ${modalIsOpen4 ? "active" : ""}`} onClick={() => {setModalIsOpen4(!modalIsOpen4);}}>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="course-mobile-hidden">
                                <CSSTransition 
                                in={modalIsOpen4}
                                timeout={300}
                                classNames="course-hidden-section"
                                mountOnEnter
                                unmountOnExit
                                >
                                    <div id={`course-mobile-hidden ${!modalIsOpen4 && "course-display_none"}`}>
                                        
                                    </div>   
                                </CSSTransition>
                            </div>
                        </div>
                        <div className={`course-ux ${modalIsOpen5 ? "active" : ""}`}>
                        <div id="course-ux-title" className="course-section3-title-initial">Проектирование UX и прототипирование</div>
                            <div className={`course-btn ${modalIsOpen5 ? "active" : ""}`} onClick={() => {setModalIsOpen5(!modalIsOpen5);}}>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="course-ux-hidden">
                                <CSSTransition 
                                in={modalIsOpen5}
                                timeout={300}
                                classNames="course-hidden-section"
                                mountOnEnter
                                unmountOnExit
                                >
                                    <div id={`course-ux-hidden ${!modalIsOpen5 && "course-display_none"}`}>
                                    </div>   
                                </CSSTransition>
                            </div>
                        </div>
                        <div className={`course-diploma ${modalIsOpen6 ? "active" : ""}`}>
                        <div id="course-diploma-title" className="course-section3-title-initial">Дипломные проекты</div>
                            <div className={`course-btn ${modalIsOpen6 ? "active" : ""}`} onClick={() => {setModalIsOpen6(!modalIsOpen6);}}>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="course-diploma-hidden">
                                <CSSTransition 
                                in={modalIsOpen6}
                                timeout={300}
                                classNames="course-hidden-section"
                                mountOnEnter
                                unmountOnExit
                                >
                                    <div id={`course-diploma-hidden ${!modalIsOpen6 && "course-display_none"}`}>
                                    </div>   
                                </CSSTransition>
                            </div>
                        </div>
                    </div>

                    <div id="course-section4">
                        <label>Преподаватель курса</label>
                        <div id="course-teacher-info">
                            <div id="course-teacher-img"></div>
                            <div id="course-teacher-data">
                                <p>Александр Кучерок</p>
                                <p id="subtext">EX Product Маркетолог</p>
                                <div className="course-teacher-data-list">— ex-руководитель образовательного проекта «Суперлюди» от Fedoriv </div>
                                <div className="course-teacher-data-list">— руководил рекламными проектами ТРК «Люкс», общая сумма проектов — 2 млн грн </div>
                                <div className="course-teacher-data-list">— участвовал в проекте «Главные часы страны» часы обратного отсчета к Евро-2012 </div>
                                <div className="course-teacher-data-list">— руководил рекламными проектами ТРК «Люкс», общая сумма проектов — 2 млн грн </div>
                                <div className="course-teacher-data-list">— ex-руководитель образовательного проекта «Суперлюди» от Fedoriv </div>
                            </div>
                        </div>
                    </div>

                    <div id="course-section5">
                        <label>Кому будет полезен этот курс</label>
                        <div className="course-option">
                            <div className="course-option-content">
                                <div className="course-option-left">
                                    <p className="top">1</p>
                                    <p className="course-option-title">Новичкам в digital</p>
                                    <div className="optiontext">Вы получите профессию с нуля: от лекций — к практике, от практики — к проекту для реального заказчика. По окончании курса вы сможете устроиться в достойную компанию или делать проекты на фрилансе — решать вам.</div>
                                </div>
                                <div className="course-option-right">
                                    <div id="course-option-first"></div>
                                </div>
                            </div>
                            <div className="course-option-content">
                                <div className="course-option-left">
                                    <p className="top" id="top2">2</p>
                                    <p className="course-option-title" id="title2">Специалистам смежных профессий</p>
                                    <div className="optiontext" id="optiontext2">Тем, кто хочет начать карьеру в дизайне<br/>Освоите популярные графические редакторы, научитесь создавать интерфейсы сайтов и мобильных приложений. Вы соберёте портфолио и сможете начать карьеру в дизайне на позиции junior-специалиста.</div>
                                </div>
                                <div className="course-option-right" id="course-option-right-2">
                                    <div id="course-option-second"></div>
                                </div>
                            </div>
                            <div className="course-option-content">
                                <div className="course-option-left">
                                    <p className="top" id="top3">3</p>
                                    <p className="course-option-title" id="title3">Владельцам микро- и малого бизнеса</p>
                                    <div className="optiontext" id="optiontext3">Научитесь самостоятельно и с нуля развивать бизнес в социальных сетях, чтобы со временем передать работу внешнему специалисту и без труда оценивать результаты его работы.</div>
                                </div>
                                <div className="course-option-right" id="course-option-right-3">
                                    <div id="course-option-third"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="course-section6">
                        <div id="course-cost-left">
                            <p id="course-cost-left-title">UX/UI дизайнер</p>
                            <p id="course-cost-left-sub">Как записаться на курс?</p>
                            <p className="course-cost-left-step">Шаг 1</p>
                            <p className="course-cost-left-step-info">Заполните таблицу правее и нажмите кнопку ‘’Записаться на курс’’</p>
                            <p className="course-cost-left-step">Шаг 2</p>
                            <p className="course-cost-left-step-info">После заполнение таблицы вы увидите всплывающее окно в котором нужно указать данные вашей банковской карты</p>
                            <p className="course-cost-left-step">Шаг 3</p>
                            <p className="course-cost-left-step-info">После оплаты, на вашу электронную почту придет логин и пароль от аккаунта на котором будет купленый вами курс</p>
                        </div>
                        <div id="course-cost-right">
                            <div id="course-cost-right-title">
                                <p id="cost">Стоимость курса</p>
                                <span>120 000₸</span>
                            </div>
                            <div id="payment">
                                <input placeholder="Ваше имя"></input>
                                <input placeholder="Телефон"></input>
                                <input placeholder="Электронная почта"></input>
                                <div id="payment-button"><span>Оплатить курс</span></div>
                                <a>Получить консультацию</a>
                            </div>
                        </div>
                    </div>
                
            </div>
        </div>
    );
}

export default CoursePage;