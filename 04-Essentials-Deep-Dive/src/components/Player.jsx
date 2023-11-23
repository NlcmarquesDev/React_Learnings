import { useState } from "react";

export default function Player({ name, symbol, isActiveStyle, onChangeName }) {
  const [playerName, setPlayername] = useState(name);
  // const [btnName, setBtnName] = useState("Edit");
  const [isEditing, setIsEditing] = useState(false);

  function handlerName(e) {
    setPlayername(e.target.value);
  }

  function handlerEditClick() {
    setIsEditing((editing) => !editing);
    // if (btnName === "Edit") {
    //   setBtnName("Save");
    //   setIsEditing(true);
    // }
    // if (btnName === "Save") {
    //   setBtnName("Edit");
    //   setIsEditing(false);
    // }
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  return (
    <li className={isActiveStyle}>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            type="text"
            required
            onChange={handlerName}
            defaultValue={playerName}
          />
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      {/* <button onClick={handlerEditClick}>{btnName}</button> */}
      <button onClick={handlerEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
