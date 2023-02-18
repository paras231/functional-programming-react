import React, { useState, useEffect } from "react";
import { sortByName } from "../Helper";
import { tabeldata } from "./data";

const TableFile = () => {
  const [data, setData] = React.useState([]);
  const [query, setQuery] = React.useState("");

  // lets assume the table data is coming from an api
  useEffect(() => {
    setData(tabeldata);
  }, [tabeldata]);

  // sort feature
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
 
  // pagination feature
  const [currentPage, setCurrentPage] = useState(1);

  const [usersPerPage] = useState(10);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredData.slice(indexOfFirstUser, indexOfLastUser);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const next = () => {
    if (currentPage < Math.ceil(filteredData.length / usersPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

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
          {currentUsers.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex gap-4">
        <button className="bg-blue-600" onClick={prev}>
          Prev
        </button>
        <button className="bg-yellow-600" onClick={next}>
          Next
        </button>
      </div>
    </>
  );
};

export default TableFile;
