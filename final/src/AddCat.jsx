import { useState } from "react";
import "./AddCat.css";

function AddCat({ onAddCat }) {
  const [cat, setCat] = useState({
    catName: "",
    age: "",
    breed: "",
    description: "",
  });

  const handleChange = (e) => {
    setCat({ ...cat, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCat(cat);
  };

  return (
    <div>
      <h2>Add Cat</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="catName"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="age"
          placeholder="Age"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="breed"
          placeholder="Breed"
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          required
        />
        <button type="submit">Add Cat</button>
      </form>
    </div>
  );
}

export default AddCat;
