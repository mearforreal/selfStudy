import React, {useState} from 'react';
import "./SubNav.css";
import { CSSTransition } from 'react-transition-group';


function SubNav() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalIsOpenLeft, setModalIsOpenLeft] = useState(false);
    const [modalIsOpenRight, setModalIsOpenRight] = useState(false);

    return (
        <div>
            <div className="article_table_content">
                <ul className="article_table">
                    <li id="table_list1"><a href="#"> Все направления</a></li>
                    <li><a href="#">HR и рекрутинг</a></li>
                    <li><a href="#">Маркетинг и PR</a></li>
                    <li><a href="#">Финансы</a></li>
                    <li><a href="#">Бизнес и управление</a></li>
                    <li id="last_nav"><a href="#">Программы</a></li>
                    <li className={`filter ${modalIsOpen ? "active" : ""} `} onClick={() => {setModalIsOpen(!modalIsOpen)}}><div></div></li>
                </ul>    
            </div>
            <div className={`date-filter ${modalIsOpen ? "" : "hide"}`}>
                <CSSTransition
                in={modalIsOpen}
                timeout={200}
                classNames="filterblock"
                mountOnEnter
                unmountOnExit>
                    <div className="filter-div">
                        <div className="filter-left">
                            <div className={`${modalIsOpen ? "head"  : "" }`} onClick={() => {setModalIsOpenLeft(!modalIsOpenLeft);}}>
                                <span className={`${modalIsOpen ? "active" : ""}`}>Старт курса</span>
                                <div className={`${modalIsOpenLeft ? "open" : "close"}`}></div>
                            </div>
                            <CSSTransition
                            in={modalIsOpenLeft}
                            timeout={200}
                            mountOnEnter
                            unmountOnExit
                            classNames="contentblock">
                                <div className={`${modalIsOpenLeft ? "content" : "hidden"}`}>
                                    <input type="checkbox" id="c1"></input>
                                    <label for="c1">На этой неделе</label>
                                    <input type="checkbox" id="c2"></input>
                                    <label for="c2">В этом месяце</label>
                                    <a>Сбросить все</a>
                                </div>
                            </CSSTransition>
                            
                        </div>
                        <div className="filter-right">
                            <div className={`${modalIsOpen ? "right_head" : ""}`} onClick={() => {setModalIsOpenRight(!modalIsOpenRight);}}>
                                <span className={`${modalIsOpen ? "active" : ""}`}>Популярные тематики</span>
                                <div className={`${modalIsOpenRight ? "open" : "close"}`}></div>
                            </div>
                            <CSSTransition
                            in={modalIsOpenRight}
                            timeout={200}
                            mountOnEnter
                            unmountOnExit
                            classNames="contentblock">
                                <div className={`${modalIsOpenRight ? "right_content" : "hidden"}`}>
                                    <input type="checkbox" id="c3"></input>
                                    <label for="c3">Все темы</label>
                                    <input type="checkbox" id="c4"></input>
                                    <label for="c4">HR и рекрутинг</label>
                                    <input type="checkbox" id="c5"></input>
                                    <label for="c5">Проектный менеджмент</label>
                                    <input type="checkbox" id="c6"></input>
                                    <label for="c6">Бизнес процессы</label>
                                    <input type="checkbox" id="c7"></input>
                                    <label for="c7">Продажи</label>
                                    <input type="checkbox" id="c8"></input>
                                    <label for="c8">Для бухгалтеров</label>
                                    <input type="checkbox" id="c9"></input>
                                    <label for="c9">Финансы</label>
                                    <input type="checkbox" id="c10"></input>
                                    <label for="c10">Маркетинг</label>
                                    <input type="checkbox" id="c11"></input>
                                    <label for="c11">Power BI</label>
                                    <input type="checkbox" id="c12"></input>
                                    <label for="c12">MS Excel</label>
                                    <input type="checkbox" id="c13"></input>
                                    <label for="c13">Аналитика</label>
                                    <input type="checkbox" id="c14"></input>
                                    <label for="c14">Менеджмент и стратегия</label>
                                    <a>Сбросить все</a>
                                </div>
                            </CSSTransition>
                        </div>
                    </div>   
                </CSSTransition>
            </div>
        </div>
    )
}

export default SubNav
