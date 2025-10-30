// frontend/src/pages/RegisterPage.jsx
import React, { useState } from "react";
import api from "../api";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "donor" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/users/register", form);
    alert("Registered successfully! Please login.");
  };

  return (
    <div className="p-8 text-center">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <select onChange={(e) => setForm({ ...form, role: e.target.value })}>
          <option value="donor">Donor</option>
          <option value="ngo">NGO</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
