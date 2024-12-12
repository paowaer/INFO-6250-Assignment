import { useState } from "react";
import "./Reservation.css";

function Reservation({ onSubmit }) {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
      />
      <input
        name="phone"
        placeholder="Phone"
        onChange={handleChange}
        required
      />
      <input
        name="address"
        placeholder="Address"
        onChange={handleChange}
        required
      />
      <button type="submit">Confirm Reservation</button>
    </form>
  );
}

export default Reservation;
