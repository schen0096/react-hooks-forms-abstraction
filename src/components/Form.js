import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
  });


  function handleChange(e){
    const name = e.target.name
    let value = e.target.value

    setFormData({
      ...formData, 
      [name]:value,
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        value={formData.firstName}
      />
      <input
        type="text"
        name="lastName"
        onChange={handleChange}
        value={formData.lastName}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
