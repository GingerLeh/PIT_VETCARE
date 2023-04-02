import React, { useState } from 'react';
import "./InputSenha.css"
function InputSenha(props) {
  const [senha, setSenha] = useState('');

  function handleChange(event) {
    setSenha(event.target.value);
  }

  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type="password"
        id={props.id}
        name={props.name}
        value={senha}
        onChange={handleChange}
        className="input-senha" 
      />
    </div>
  );
}

export default InputSenha;
