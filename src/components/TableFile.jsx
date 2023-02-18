import React, { useEffect } from "react";
import { sortByName } from "../Helper";
import { tabeldata } from "./data";

const TableFile = () => {
  const [data, setData] = React.useState([]);
  const [query, setQuery] = React.useState("");

  // lets assume the table data is coming from an api
  useEffect(() => {
    setData(tabeldata);
  }, [tabeldata]);

  const handleSortByName = () => {
    //  it is important to spread the array so we can create a new array.
    const sortedData = sortByName([...data]);
    setData(sortedData);
  };

  const clearFilter = () => {
    setData(tabeldata);
  };

  // search filter->
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <>
      <input
        className="pl-4"
        type="search"
        placeholder="search..."
        value={query}
        onChange={handleSearch}
      />
      <div className="flex gap-4 pt-4">
        <button className="bg-blue-500 p-2" onClick={handleSortByName}>
          Sort By name
        </button>
        <button className="bg-red-400" onClick={clearFilter}>
          Clear Sort
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableFile;
