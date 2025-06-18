import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoForm from "../Components/TodoForm";
const CreateTodo = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const getTitle = (e) => {
    setTitle(e.target.value);
  };

  const getDesc = (e) => {
    setDesc(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let formData = {
      description: desc,
      title: title,
    };

    try {
      const response = await axios.post(
        "https://api.freeapi.app/api/v1/todos/",
        formData
      );
      if (response.data.success) {
        console.log("Todo Created:", response.data.data);
        setTitle("");
        setDesc("");
      } else {
        alert("Failed to create todo ❌");
      }
    } catch (error) {
      console.error("Error posting todo:", error);
      alert("Error occurred while creating todo");
    }
  };

  const isDisabled = title.trim() && desc.trim();



  return (
    <>
      <div className="flex justify-end m-4 gap-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 text-white rounded-md"
          onClick={() => navigate("/todo-list")}
        >
          Todo List
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 text-white rounded-md"
          onClick={() => navigate("/")}
        >
          Home
        </button>
      </div>

     <TodoForm
      title={title}
      desc={desc}
      onTitleChange={getTitle}
      onDescChange={getDesc}
      onSubmit={onSubmit}
      isDisabled={!isDisabled}
      mode="Create"
    />
    </>
  );
};

export default CreateTodo;
