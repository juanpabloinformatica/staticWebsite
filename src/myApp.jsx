import { useState } from "react";
import "./App.css";
function MyApp() {
  const [list, setList] = useState([]);
  const [clear, setClear] = useState("");
  const submitHandler = (evt) => {
    evt.preventDefault();
    if (evt.target.name.value == "") {
      console.error("empty string");
    } else {
      setList((list) => [...list, evt.target.name.value]);
      setClear("");
    }
  };
  const takeChangeInput = (evt) => {
    setClear(evt.target.value);
  };
  const printList = () => {
    return list.map((element, index) => (
      <li className="mt" key={index.toString()}>
        {element}
        <button
          className="red ml"
          onClick={() => {
            removeItem(index);
          }}
        >
          e
        </button>
      </li>
    ));
  };
  function removeItem(index) {
    console.log(index);
    const findIndex = list.findIndex((item) => item == index);
    console.log(findIndex);
    setList((list) => list.filter((item, index2) => index != index2));
  }
  return (
    <>
      <div className="center">
        <h1>formulario</h1>
        <form className="center" onSubmit={submitHandler}>
          <input
            type="text"
            name="name"
            value={clear}
            onChange={takeChangeInput}
          />
          <button type="submit">add</button>
        </form>
        {printList()}
      </div>
    </>
  );
}
export default MyApp;
