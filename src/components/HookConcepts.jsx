import React, { useState } from "react";

export default function HookConcepts() {
  const [field, setField] = useState([]);

  //  the second value in the useState is basically a function that updates the initial value.

  // let's take an example->

  const handleAddvalues = () => {
    //  the prev value is basically the initial state of the field.
    // then we are spreading it means we are creating a new array and we are also adding an object to the field array at the end
    setField((prev) => [
      ...prev,
      { label: "", value: "" },
      { tag: "", newTag: "" },
      [
        {
          newValue: "",
          newLabel: "",
        },
      ],
    ]);
    // can add as many data in setField function
  };

  // example using an object->
  const [data, setData] = useState({ name: "", id: "" });

  const handleUpdateData = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  // console.log(field);
  console.log(data.name);

  function calculateData() {
    return 10 * 12;
  }

  // passing a function in useState directly->
  const [textState, setTextState] = useState(calculateData());

  function calculateMoreNum() {
    // will return a number inside an array->
    setTextState((prev) => [prev * 2]);
  }
  console.log(textState);
  return (
    <>
      <div className="flex gap-4">
        <button
          onClick={handleAddvalues}
          className="bg-blue-600 p-2 rounded-xl"
        >
          Add Field
        </button>
        <button
          onClick={handleUpdateData}
          className="bg-orange-600 p-2 rounded-xl"
        >
          Update Data
        </button>
        <button
          onClick={calculateMoreNum}
          className="bg-yellow-600 p-2 rounded-xl"
        >
          Calculate
        </button>
        <label htmlFor="">Name</label>
        <input
          name="name"
          type="text"
          value={data.name}
          onChange={handleUpdateData}
        />
        <input
          name="id"
          type="text"
          value={data.id}
          onChange={handleUpdateData}
        />
      </div>
    </>
  );
}
