import React, { useEffect, useState } from "react";
import { Button, Table } from "antd";
import { useNavigate } from "react-router-dom";
const Pages = () => {
  const [dataSource, setDataSource] = useState([]);
  const navigate = useNavigate();
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (value) => `₹ ${value}`,
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Image",
      dataIndex: "image",
      render: (text) => <img src={text} alt="product" style={{ width: 50 }} />,
    },
  ];
  useEffect(() => {
    const FetchAPI = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products"
        );
        const data = await response.json();
        setDataSource(data);
      } catch (error) {
        console.log(`error while loading data : ${error}`);
      }
    };
    FetchAPI();
  }, []);

  return (
    <>
      <div className="flex justify-end p-4 bg-slate-400">
        <Button type="primary" onClick={() => navigate("/")}>
          {" "}
          Home
        </Button>
      </div> 
      <div>
        <Table columns={columns} dataSource={dataSource} pagination={{pageSize:5}}/>
      </div>
    </>
  );
};

export default Pages;
