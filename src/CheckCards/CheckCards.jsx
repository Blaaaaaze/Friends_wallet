import React from "react";
import "./CheckCards.css";

const CheckCards = ({persons, products}) => {


    return (
        <div className="result-container">
          <h2>Итог</h2>
          <p>Здесь вы видите сумму, который каждый потратил, а также продукты, которые он покупал. По кнопке скачать вы скачаете идентичную картинку в формате png</p>
          <div className="card-container">
            {persons.map((person) => {
              const personProducts = products.filter(product =>
                product.participants.includes(person.id)
              );
    
              const total = personProducts.reduce(
                (sum, p) => sum + p.dividedPrice,
                0
              );
    
              return (
                <div key={person.id} className="person-summary">
                  <h3>{person.name}</h3>
                  <p>Долг: {total.toFixed(2)} ₽</p>
                  <p>Продукты:</p>
                  <ul>
                    {personProducts.length > 0 ? (
                      personProducts.map((product, index) => (
                        <li key={index}>
                          {product.name} – {product.dividedPrice.toFixed(2)} ₽
                        </li>
                      ))
                    ) : (
                      <li>Нет товаров</li>
                    )}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      );
}

export default CheckCards;