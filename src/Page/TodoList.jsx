import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TodoForm from "../Components/TodoForm";
import { Card } from "antd";
const TodoList = () => {
  const navigate = useNavigate();
  const [state, setState] = useState([]);
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [id, setId] = useState("");

  const getTitle = (e) => {
    setTitle(e.target.value);
  };

  const getDesc = (e) => {
    setDesc(e.target.value);
  };

  useEffect(() => {
    const FetchApi = async () => {
      try {
        const response = await axios.get(
          "https://api.freeapi.app/api/v1/todos"
        );
        const data = await response.data.data;
        setState(data);
      } catch (err) {
        console.log(`error found : ${err}`);
      }
    };
    FetchApi();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `https://api.freeapi.app/api/v1/todos/${id}`
      );

      const result = response.data;

      if (result.success) {
        setState((prev) => prev.filter((item) => item._id !== id));
      }
    } catch (err) {
      console.error(`Error while deleting API: ${err}`);
    }
  };

  const handleEdit = async (id) => {
    setShow(true);
    setId(id);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let formData = {
      description: desc,
      title: title,
    };

    try {
      /*
      const response = await fetch(
        `https://api.freeapi.app/api/v1/todos/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      */
      
      const response = await axios.patch(
        `https://api.freeapi.app/api/v1/todos/${id}`,
        formData
      );

      const result = await response.data;

      if (result.success) {
        const updatedTodo = result.data;
        setState((prevState) =>
          prevState.map((todo) =>
            todo._id === updatedTodo._id ? updatedTodo : todo
          )
        );
        setTitle("");
        setDesc("");
        setShow(false);
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
      <div className="text-2xl font-semibold underline bg-red-100 p-1">
        Todo - List
      </div>
      <div className="flex justify-end bg-red-100 p-4 gap-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 text-white rounded-md"
          onClick={() => navigate("/create-todo")}
        >
          Create-Todo
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 text-white rounded-md"
          onClick={() => navigate("/")}
        >
          Home
        </button>
      </div>
      <div className=" bg-gray-300 h-screen">
        <div className="grid grid-cols-3 gap-4 p-4">
          {state?.length > 0 ? (
            state.map((item) => (
              <Card
                key={item._id}
                title={item.title}
                className="shadow-md"
              >
                <p>{item.description}</p>
                <div className="flex justify-end gap-2 mt-1">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                    onClick={() => handleEdit(item._id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </div>
              </Card>
            ))
          ) : (
            <p>No data found</p>
          )}
        </div>
      </div>
      {show && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <TodoForm
            title={title}
            desc={desc}
            onTitleChange={getTitle}
            onDescChange={getDesc}
            onSubmit={onSubmit}
            isDisabled={!isDisabled}
            mode="Update"
            handleClose={() => setShow(false)}
          />
        </div>
      )}
    </>
  );
};

export default TodoList;
