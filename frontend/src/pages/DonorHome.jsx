import React, { useEffect, useState } from "react";
import API from "../api";
import { Link } from "react-router-dom";

export default function DonorHome() {
  const [bundles, setBundles] = useState([]);

  useEffect(() => {
    const fetchBundles = async () => {
      const res = await API.get("/bundles");
      setBundles(res.data);
    };
    fetchBundles();
  }, []);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-green-700">
        Welcome Donor 🌱
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Available bundles from NGOs you can contribute to
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bundles.length > 0 ? (
          bundles.map((b) => (
            <div
              key={b._id}
              className="bg-white shadow-md rounded-2xl p-4 flex flex-col justify-between transition hover:shadow-lg"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2 text-green-700">
                  {b.name}
                </h3>
                <p className="text-gray-600 mb-3">{b.description}</p>
                <p className="text-sm mb-1">
                  <strong>Created by:</strong> {b.createdBy?.name || "Unknown NGO"}
                </p>
                <p className="text-sm">
                  <strong>Status:</strong> {b.status || "Active"}
                </p>
              </div>
              <Link
                to={`/bundle/${b._id}`}
                className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded-md text-center hover:bg-green-700 transition"
              >
                View & Donate
              </Link>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No bundles available yet.</p>
        )}
      </div>
    </div>
  );
}
