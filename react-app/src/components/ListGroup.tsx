function ListGroup() {
  let items = [
    "New York",
    "San Francisco",
    "Tokyo",
    "London",
    "Amsterdam",
    "Berlin",
  ];

  /*const getMessages = () => {
    return items.length === 0 ? "No items found" : null;
  };*/

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={(event) => console.log(event)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
