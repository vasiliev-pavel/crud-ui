import React, { useState } from "react";

const Row = (props) => {
  const data = {
    name: props.user.data.name || "No data available",
    age: props.user.data.age || "No data available",
    email: props.user.data.email || "No data available",
  };

  const onEdit = () => {
    setisEdit((isEdit) => !isEdit);
  };

  const upData = (_id, userData) => {
    props.updateData(props.user._id, userData);
    onEdit();
  };

  const [userData, setuserData] = useState(data);
  const [isEdit, setisEdit] = useState(true);

  const handleInputChange = (e) => {
    setuserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <tr>
      <td>
        <input
          className="table-input"
          type="text"
          name="name"
          disabled={isEdit}
          value={userData.name}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          className="table-input"
          type="text"
          name="age"
          disabled={isEdit}
          value={userData.age}
          onChange={handleInputChange}
        />
      </td>
      <td>
        <input
          className="table-input"
          type="text"
          name="email"
          disabled={isEdit}
          value={userData.email}
          onChange={handleInputChange}
        />
      </td>
      <td>
        {isEdit ? (
          <button onClick={() => onEdit()}>Изменить</button>
        ) : (
          <button onClick={() => upData(props.user._id, userData)}>
            Обновить
          </button>
        )}
        <button
          className="button"
          onClick={() => props.deleteData(props.user._id)}
        >
          Удалить
        </button>
      </td>
    </tr>
  );
};
export default Row;
