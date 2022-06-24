import React, { useContext } from "react";
import "./Input.css";
import { Context } from "../../../Context";
import { Link, useNavigate } from "react-router-dom";
import { getTask } from "../getTask";

function Input() {
  const {
    tasks,
    setTasks,
    name,
    title,
    setTitle,
    themeColor,
    darkMode,
    getDarkMode,
  } = useContext(Context);

  const navigate = useNavigate();

  const changeTitle = (e) => setTitle(e.target.value);
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addPost();
      navigate("../task");
    }
  };
  function addPost() {
    setTasks([...tasks, getTask(name, title)]);
    setTitle("");
  }
  return (
    <div className="input">
      <div className="inputPost" style={darkMode ? themeColor.post : null}>
        <textarea
          placeholder="What's happening?"
          value={title}
          onChange={changeTitle}
          style={getDarkMode(darkMode, "textarea")}
          onKeyPress={handleKeyPress}
        />

        <button
          className="addButton"
          onClick={addPost}
          style={getDarkMode(darkMode, "buttonInput")}
        >
          <Link to={"/task"}>ADD NEW!</Link>
        </button>
      </div>
    </div>
  );
}

export default Input;
