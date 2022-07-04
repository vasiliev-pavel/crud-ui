import React, { useState } from "react";
const Form = (props) => {
  const [data, setData] = useState({
    name: "",
    age: "",
    email: "",
  });

  const sendData = (e, data) => {
    props.putData(e, data);
    setData({ name: "", age: "", email: "" });
  };

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={(e) => sendData(e, data)}>
        <input
          placeholder="Name"
          type="text"
          value={data.name}
          name="name"
          onChange={handleInputChange}
        />
        <input
          placeholder="Age"
          type="text"
          value={data.age}
          name="age"
          onChange={handleInputChange}
        />
        <input
          placeholder="Email"
          type="email"
          value={data.email}
          name="email"
          onChange={handleInputChange}
        />
        <button className="button" type="submit">
          Добавить
        </button>
      </form>
    </div>
  );
};

export default Form;
