import React, { useEffect, useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

export default function NGOHome() {
  const [bundles, setBundles] = useState([]);

  useEffect(() => {
    api.get("/bundles").then(res => setBundles(res.data));
  }, []);

  return (
    <div className="p-4">
      <h2>Your Bundles</h2>
      <Link to="/create-bundle"><button>Create New Bundle</button></Link>
      {bundles.map(b => (
        <div key={b._id} className="card">
          <h3>{b.name}</h3>
          <p>{b.description}</p>
        </div>
      ))}
    </div>
  );
}
