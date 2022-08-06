import React from "react";
import { NavLink } from "react-router-dom";


function NavBar(){
    return(
        <div className="navbar">
            <ul className="navbarlist">
                <li className="hometab">
                    <NavLink
                    to="/"
                    exact
                    activeStyle={{
                        color: "violet"
                    }}>
                        Home
                    </NavLink>
                </li>
                <li className="companytab">
                    <NavLink
                     to="/companies"
                     exact
                     activeStyle={{
                        color:"violet"
                     }}>
                        Companies
                     </NavLink>
                </li>
                <li className="subsidiarytab">
                    <NavLink
                     to="/subsidiaries"
                     exact
                     activeStyle={{
                        color:"violet"
                     }}>
                        Subsidiaries
                     </NavLink>
                </li>
                <li className="gamestab">
                    <NavLink
                     to="/games"
                     exact
                     activeStyle={{
                        color:"violet"
                     }}>
                        Games
                     </NavLink>
                </li>
                <li className="formstab">
                    <NavLink
                    to="/forms"
                    exact
                    activeStyle={{
                        color:"violet"
                    }}>
                        Forms
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;