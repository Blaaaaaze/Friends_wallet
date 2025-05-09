import React from "react";
import "./Information.css";
import ogurec from "../img/ogurec.jpg";

const Information = () => {
    return (
        <div className="content-container">
            <div className="img-container">
                <img src={ogurec} alt="ogurec logo" />
            </div>
            <div className="info-container">
                <h2>Информация</h2>
                <p>Этот сайт - калькулятор для компаний друзей. С его помощью вы сможете автоматиировать процесс подсчета суммы от каждого вашего друга и скинуть в чат красивую картинку с суммой их задолженности. По желанию, вы сможете и указать список продуктов, за который они платят. </p> 
                <p> Идея вдохновлена лучшей компанией друзей "межпространственные огурцы"</p>
            </div>
        </div>
    );
}

export default Information;