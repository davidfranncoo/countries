import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountryByName } from "../../action";
import "./SearchBar.css"

export default function SeachBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function hardlerChange(e) {
    console.log(e.target.value);
    e.preventDefault();
    setName(e.target.value);
  }

  function handlerClick(e) {
    e.preventDefault();
    dispatch(getCountryByName(name));
    setName("");
    console.log("Nombre:", name);

  }

  return (
    <div>
      <input
      className="input"
        type="text"
        //agregando el value, podemos hacer que el input se limpie adecuadamente una vez haga el click
        value={name}
        placeholder="Ingresa país..."
        onChange={(e) => hardlerChange(e)}
      ></input>
      <button className="boton-searchbar" type="submit" onClick={(e) => handlerClick(e)}>
        Buscar ▷
      </button>
    </div>
  );
}