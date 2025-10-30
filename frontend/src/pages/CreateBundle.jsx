import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function CreateBundle() {
  const [form, setForm] = useState({ name: "", description: "", itemsRequired: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    await api.post("/bundles", { ...form, itemsRequired: form.itemsRequired.split(",") }, {
      headers: { Authorization: `Bearer ${token}` },
    });
    alert("Bundle created!");
    navigate("/ngo");
  };

  return (
    <div className="p-4">
      <h2>Create New Bundle</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Bundle Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <textarea placeholder="Description" onChange={(e) => setForm({ ...form, description: e.target.value })}></textarea>
        <input placeholder="Items Required (comma separated)" onChange={(e) => setForm({ ...form, itemsRequired: e.target.value })} />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
