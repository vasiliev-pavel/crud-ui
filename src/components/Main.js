import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplayTable from "./Table";
import Form from "./Form";
import "./table.css";

const Main = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get("http://178.128.196.163:3000/api/records").then((response) => {
      setList(response.data);
    });
  }, []);

  const deleteData = (id) => {
    axios.delete(`http://178.128.196.163:3000/api/records/${id}`);
    setList((list) => list.filter((item) => item._id !== id));
  };

  const updateData = (id, data) => {
    axios.post(`http://178.128.196.163:3000/api/records/${id}`, {
      data,
    });
  };

  const putData = (e, data) => {
    e.preventDefault();
    axios
      .put("http://178.128.196.163:3000/api/records", {
        data,
      })
      .then((response) => {
        setList([...list, response.data]);
      });
  };

  return (
    <div>
      <div>
        <Form putData={putData} />
      </div>
      <div>
        <DisplayTable
          list={list}
          deleteData={deleteData}
          updateData={updateData}
        />
      </div>
    </div>
  );
};

export default Main;
