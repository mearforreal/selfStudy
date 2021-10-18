import React, {useState} from 'react';
import './Navbar.scss';
import MyCourses from '../mycourses/MyCourses';
import Archive from '../archive/Archive';
import Setting from '../settings/Setting';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";


function Navbar() {
    const [isActive, setActive] = useState(true);
    const [isActive2, setActive2] = useState(false);
    const [isActive3, setActive3] = useState(false);
    return(
        <div id="profile_navbar_content">
            <div className="mycourses_navbar">
                <Link to="/profile/mycourses" className="text"><div className={`mycourses_btn ${isActive ? "active" : ""}`} onClick={() => {setActive(!isActive); setActive2(false); setActive3(false)}}>Мои курсы</div></Link>
                <Link to="/profile/completed_courses" className="text"><div className={`mycourses_completed_btn ${isActive2 ? "active" : ""}`} onClick={() => {setActive2(!isActive2); setActive(false); setActive3(false)}}>Пройденные курсы</div></Link>
                <Link to="/profile/settings" className="text"><div className={`mycourses_settings_btn ${isActive3 ? "active" : ""}`} onClick={() => {setActive3(!isActive3); setActive(false); setActive2(false)}}>Настройки аккаунта</div></Link>  
            </div>

            <Route path="/profile/mycourses" component={MyCourses}/>
            <Route path="/profile/completed_courses" component={Archive}/>
            <Route path="/profile/settings" component={Setting}/>
        </div>
    );
}

export default Navbar;