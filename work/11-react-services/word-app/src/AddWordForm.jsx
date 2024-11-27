import { useState } from "react";
import "./AddWordForm.css";

function AddWordForm({ onAddWord }) {
  const [task, setTask] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    setTask("");
    onAddWord(task);
  }

  function onTyping(e) {
    setTask(e.target.value);
  }

  return (
    <form className="add__form" action="#/add" onSubmit={onSubmit}>
      <input className="add__task" value={task} onChange={onTyping} />
      <button type="submit" className="add__button">
        Add
      </button>
    </form>
  );
}

export default AddWordForm;
