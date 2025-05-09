import React, { useState } from "react";
import "./ProductForm.css";
import { Trash, Pencil } from 'lucide-react';

const ProductForm = ({persons,setPersons, products, setProducts}) => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [selectedPersons, setSelectedPersons] = useState([]);

    const togglePersonSelection = (id) => {
        setSelectedPersons((prev) =>
          prev.includes(id)
            ? prev.filter((pid) => pid !== id)
            : [...prev, id]
        );
      };

    const handleProductNameChange = (e) => {
        setName(e.target.value);
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.querySelector('button')?.blur();


        if (!name || !price || selectedPersons.length === 0) return;
      
        const dividedPrice = parseFloat(price) / selectedPersons.length;
        const newProduct = {
          name: name,
          price: parseFloat(price),
          participants: selectedPersons,
          dividedPrice
        };
      
        setProducts([...products, newProduct]);

      
        setName('');
        setPrice('');
        setSelectedPersons([]);
    };

    const handleDelete = (index) => {
        const updated = [...products];
        updated.splice(index, 1);
        setProducts(updated);
    }

    const handleEdit = (index) => {
        const product = products[index];
        setName(product.name);
        setPrice(product.price.toString());
        setSelectedPersons(product.participants);
        const updated = [...products];
        updated.splice(index, 1);
        setProducts(updated);
    }



    return(
        <div className="container product-container">
            <h2>Продукты</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-container-product">
                    <label htmlFor="productName" className="input-row">Название 
                        <input id="productName" type="text" placeholder="Товар" 
                        onChange={handleProductNameChange} value={name}
                        className="base-input"
                        required/>
                    </label>
                
                    <label htmlFor="productPrice" className="input-row">Стоимость 
                        <input id="productPrice" type="number" min={0} placeholder="Цена" 
                        onChange={handlePriceChange} value={price}
                        className="base-input"
                        required/>    
                    </label>
                    
                </div>

                <div className="persons-wrapper">
                    {persons.map((person, index) => (
                        <label key={person.id || index} className="label-checkbox">
                        <input
                            type="checkbox"
                            value={person.name}
                            checked={selectedPersons.includes(person.id)}
                            onChange={() => togglePersonSelection(person.id)}
                        />
                        {person.name || `Участник ${index + 1}`}
                        </label>
                    ))}
                </div>

                <button className="btn btn-add" type="submit">Добавить</button>
            </form>

            <div className="list-wrapper">
            <h3>Список продуктов:</h3>
                {products.length === 0 ? (
                    <p>Продукты ещё не добавлены</p>
                ) : (
                    <ul>
                        {products.map((product, index) => (
                            <li key={index} className="product-item">
                                <p>
                                    <strong>{product.name}</strong> — {product.price}₽ <br />
                                    {product.participants.map(pid => persons.find(p => p.id === pid)?.name || 'Неизвестно')
                                    .join(', ')}
                                </p>
                                <div className="product-actions">
                                    <button onClick={() => handleEdit(index)} className="btn btn-edit item-btn"><Pencil /></button>
                                    <button onClick={() => handleDelete(index)} className="btn btn-del item-btn"><Trash /></button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default ProductForm;