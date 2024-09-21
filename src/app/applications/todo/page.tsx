"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaPlus } from "react-icons/fa";

const TodoList = () => {
  const [tasks, setTasks] = useState<{ text: string; completed: boolean }[]>([]);
  const [taskInput, setTaskInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (taskInput.trim()) {
      const newTask = { text: taskInput, completed: false };
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setTaskInput("");
      showPopup("Task added!", "success");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  const toggleTaskCompletion = (index: number) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
    showPopup(
      newTasks[index].completed ? "Task completed!" : "Task uncompleted!",
      newTasks[index].completed ? "success" : "info"
    );
  };

  const deleteTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    showPopup("Task deleted!", "error");
  };

  const showPopup = (message: string, type: "success" | "info" | "error") => {
    const popup = document.createElement("div");
    popup.className = `popup ${type}`;
    popup.textContent = message;
    document.body.appendChild(popup);

    popup.style.display = "block";
    setTimeout(() => {
      popup.style.opacity = "1";
      popup.style.transform = "translateX(-50%) translateY(0)";
    }, 10);

    setTimeout(() => {
      popup.style.opacity = "0";
      popup.style.transform = "translateX(-50%) translateY(20px)";
      setTimeout(() => {
        popup.remove();
      }, 300);
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container text-white max-w-xl p-6 bg-gray-900 rounded-lg shadow-lg animate__animated animate__fadeIn">
        <h1 className="text-4xl font-bold text-center mb-6 animate__animated animate__fadeInDown">
          To-do
        </h1>

        <div className="input-container mb-6 flex animate__animated animate__fadeInUp">
          <input
            ref={inputRef}
            className="task-input flex-grow px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 animate__animated animate__pulse"
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Insira uma nova tarefa."
          />
          <button
            className="add-task-btn ml-4 px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded-lg text-white transition-all duration-300 animate__animated animate__bounce"
            onClick={addTask}
          >
            <FaPlus className="text-2xl" />
          </button>
        </div>

        <ul className="task-list max-h-80 overflow-y-auto animate__animated animate__fadeInUp">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`task-item p-4 mb-2 bg-gray-800 rounded-lg shadow-md flex justify-between items-center transition-all duration-300 ${
                task.completed
                  ? "bg-green-600 glow animate__animated animate__tada"
                  : "hover:bg-gray-700"
              }`}
              onClick={() => toggleTaskCompletion(index)}
            >
              <span
                className={`task-text ${
                  task.completed ? "line-through text-gray-400" : ""
                } animate__animated animate__fadeIn`}
              >
                {task.text}
              </span>
              <button
                className="delete-btn text-red-500 hover:text-red-700 text-2xl animate__animated animate__fadeIn"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteTask(index);
                }}
              >
                &times;
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
