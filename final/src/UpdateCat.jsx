import { useState } from "react";

function UpdateCat({ cat: currentCat, onUpateCat }) {
  const [cat, setCat] = useState({
    id: currentCat.id,
    catName: currentCat.catName,
    age: currentCat.age,
    breed: currentCat.breed,
    description: currentCat.description,
  });

  const handleChange = (e) => {
    setCat({ ...cat, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpateCat(cat);
  };

  return (
    <div>
      <h2>Update Cat</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={cat.catName}
          name="catName"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="age"
          value={cat.age}
          placeholder="Age"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="breed"
          value={cat.breed}
          placeholder="Breed"
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          value={cat.description}
          placeholder="Description"
          onChange={handleChange}
          required
        />
        <button type="submit">Update Cat</button>
      </form>
    </div>
  );
}

export default UpdateCat;
