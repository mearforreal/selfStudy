import React, {useState} from 'react';
import Route from 'react-router-dom';
import "./Setting.scss";

function Setting() {
	const [passwordShown, setPasswordShown] = useState(false);
	const [passwordShown2, setPasswordShown2] = useState(false);
	const [passwordShown3, setPasswordShown3] = useState(false);
	const togglePasswordVisiblity = () => {
	  setPasswordShown(passwordShown ? false : true);
	};
	const togglePasswordVisiblity2 = () => {
		setPasswordShown2(passwordShown2 ? false : true);
	};
	const togglePasswordVisiblity3 = () => {
		setPasswordShown3(passwordShown3 ? false : true);
	};

	return (
		<div className="settings-content">
			<div className="settings-inside">
				<div className="settings-main">
					<label>Настройки аккаунта</label>
					<div className="settings-account">
						<div className="settings-account-photo"></div>
						<span>Мамадьяров Нурдаулет</span>
						<span>Выйти из аккаунта</span>
						
					</div>
					<div className="settings-left-side">
						<label>Имя</label>
						<input placeholder="Нурдаулет" type="text"/>
						<label>Фамилия</label>
						<input placeholder="Мамадьяров" type="text"/>
						<label>Отчество</label>
						<input placeholder="Необязательно" type="text"/>
						<label>Дата рождения</label>
						<input placeholder="дд.мм.гггг" type="text"/> 
						<div id="setGender">
							<input id="radio" type="radio" name="radio" value="male"/>
							<label for="radio" className="radio-label">Мужской</label> 
							<input id="radio2" type="radio" name="radio" value="female"/>
							<label for="radio2" className="radio-label">Женский</label>
						</div>
					</div>
					<div className="settings-right-side">
						<label>Старый пароль</label>
						<input placeholder="Введите старый пароль" type={passwordShown ? "text" : "password"} name="password"/>
						<div onClick={togglePasswordVisiblity} className={`eye ${passwordShown ? "open" : "close"}`}></div>
						<label>Новый пароль</label>
						<input placeholder="Введите новый пароль" type={passwordShown2 ? "text" : "password"} name="password"/>
						<div onClick={togglePasswordVisiblity2} className={`eye ${passwordShown2 ? "open" : "close"}`}></div>
						<label>Повторите пароль</label>
						<input placeholder="Повторите новый пароль" type={passwordShown3 ? "text" : "password"} name="password"/>
						<div onClick={togglePasswordVisiblity3} className={`eye ${passwordShown3 ? "open" : "close"}`}></div>
						
						<a>Забыли пароль?</a>
					</div>
					<div className="settings-button"><span>Сохранить настройки</span></div>
				</div>
			</div>
		</div>
	)
}

export default Setting;
