import React, { useState, useRef, useEffect } from "react";
import './PersonForm.css';

const PersonForm = ({ persons, setPersons }) => {
  const [focusedIndex, setFocusedIndex] = useState(null);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (
      focusedIndex !== null &&
      inputRefs.current[focusedIndex] &&
      document.activeElement !== inputRefs.current[focusedIndex]
    ) {
      inputRefs.current[focusedIndex].focus();
    }
  }, [persons]);

  const handleAddField = () => {
    if (persons.length >= 10) return;
  
    const newIndex = persons.length;
    setPersons([...persons, { name: '', total: 0, products: []}]);
    setFocusedIndex(newIndex);
  };
  
  const handleDeleteField = () => {
    if (persons.length === 0) return;
  
    const newList = [...persons];
    newList.pop();
    setPersons(newList);
    const newIndex = focusedIndex !== null && focusedIndex >= newList.length
      ? newList.length - 1
      : focusedIndex;
    setFocusedIndex(newIndex >= 0 ? newIndex : null);
  };

  const handleNameChange = (index, name) => {
    setPersons((prevState) => {
      const updated = [...prevState];
      updated[index] = {
        ...updated[index],
        name,
        id: updated[index]?.id || Date.now() + index,
      };
      return updated;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
  };

  return (
    <div className="container person-container">
      <h2>Участники</h2>
      <form onSubmit={handleSubmit}>
      <div className="input-container">
        {persons.map((p, index) => (
          <input
            key={p.id || index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            value={p.name}
            placeholder={`Участник ${index + 1}`}
            onChange={(e) => handleNameChange(index, e.target.value)}
            onFocus={() => setFocusedIndex(index)}
            className="base-input person-input"
            required
          />
        ))}
      </div>

      <div className="btn-container">
        <button onClick={handleAddField} disabled={persons.length >= 10} className="btn btn-add">
          Добавить
        </button>

        <button onClick={handleDeleteField} disabled={persons.length === 0} className="btn btn-del">
          Удалить
        </button>
      </div>

      {persons.length >= 10 && <p style={{ color: 'red' }}>Максимум 10 участников</p>}
      </form>
    </div>
  );
};

export default PersonForm;
