import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="container">
      <h1>my Todo's</h1>
      <ul>
        <li>
          <input
            type="text"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            value={inputValue}
            onKeyDown={(e) => {
              console.log("key was pressed", e.key);
              if (e.key === "Enter") {
                console.log("Enter was pressed");
                setTodos(todos.concat(inputValue));
                setInputValue("");
              }
            }}
            placeholder="What do you need to do?"
          ></input>
        </li>
        {todos.map((item, index) => (
          <li>
            <div className="listItems">{item}</div>{" "}
            <button
              onClick={() => {
                setTodos(
                  todos.filter((element, currentIndex) => {
                    const newArray = index != currentIndex;
                    setTodos(newArray)
                  })
                );
              }}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </li>
        ))}
      </ul>
      <div className="taskCounter">{todos.length} task</div>
    </div>
  );
};
export default TodoList;
