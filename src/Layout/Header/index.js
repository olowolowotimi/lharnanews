import React from "react";
import topStyle from "./style/Header.module.css";


const Header = () => {
    return(
        <div className={topStyle.background}>
            <div className={topStyle.details}>
                <h3>US Daily Business News</h3>
            </div>
        </div>
    )
}   



export default Header;