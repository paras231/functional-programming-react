import React, { useState } from "react";

export default function CreatableForm() {
  const [field, setField] = useState("");

  const handleFieldChange = (e) => {
    setField(e.target.value);
  };

  function createField() {}

  return (
    <>
      <h2>Createable form</h2>
      <input />
    </>
  );
}
