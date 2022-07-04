import Row from "./Row";

const DisplayTable = (props) => {
  let filter_list = props.list.filter((item) => {
    if (item.hasOwnProperty("data")) {
      return true;
    }
    return false;
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filter_list.map((item) => (
            <Row
              key={item._id}
              user={item}
              deleteData={props.deleteData}
              updateData={props.updateData}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayTable;
