// frontend/src/pages/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to BundleShare</h1>
      <p className="mb-6">Connect donors and NGOs to complete essential bundles together!</p>
      <div className="flex justify-center gap-4">
        <Link to="/register"><button>Register</button></Link>
        <Link to="/login"><button>Login</button></Link>
      </div>
    </div>
  );
}
