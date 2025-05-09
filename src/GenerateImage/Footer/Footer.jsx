import React from "react";
import "./Footer.css";

const Footer = () => {
    return(
        <footer>
            <h3>Баги</h3>
            <ul className="bugs">
                <li>Продукт сохраняет id удаленного пользователя</li>
                <li>При определенных махинациях сумма за товар рассчиывается некорректно. Это связано с пунктом выше</li>
                <li>Пока плохо адаптировано под мобильные экраны</li>
            </ul>
            <p>Если вы нашли ещё баг, напишите мне в telegram: <b>@IgoreshkaIgogoshka</b></p>
        </footer>
    );
};

export default Footer;