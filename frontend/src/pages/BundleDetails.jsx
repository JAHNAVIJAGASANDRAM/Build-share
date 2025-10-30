import React, { useEffect, useState } from "react";
import api from "../api";
import { useParams } from "react-router-dom";

export default function BundleDetails() {
  const { id } = useParams();
  const [bundle, setBundle] = useState(null);
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    api.get(`/bundles/${id}`).then((res) => setBundle(res.data));
  }, [id]);

  const addItem = async () => {
    if (!item || !quantity) return alert("Please fill both fields!");
    await api.post(`/bundles/${id}/items`, { item, quantity });
    const updated = await api.get(`/bundles/${id}`);
    setBundle(updated.data);
    setItem("");
    setQuantity("");
    setMessage("✅ Thank you for your donation!");
    setTimeout(() => setMessage(""), 3000);
  };

  if (!bundle) return <p>Loading...</p>;

  const progress = Math.min(
    (bundle.itemsReceived.length / bundle.itemsRequired.length) * 100,
    100
  );

  return (
    <div className="p-8 max-w-2xl mx-auto bg-white shadow-lg rounded-xl mt-10">
      <h2 className="text-3xl font-bold mb-2">{bundle.name}</h2>
      <p className="text-gray-600 mb-4">{bundle.description}</p>

      <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
        <div
          className="bg-green-500 h-3 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-sm mb-4">{progress.toFixed(0)}% Completed</p>

      <h4 className="text-lg font-semibold mb-2">Add Item to Donate</h4>
      <div className="flex gap-2 mb-3">
        <input
          placeholder="Item name"
          className="border p-2 rounded w-1/2"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <input
          placeholder="Quantity"
          className="border p-2 rounded w-1/4"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button
          onClick={addItem}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Donate
        </button>
      </div>

      {message && <p className="text-green-600 font-medium">{message}</p>}

      <h4 className="mt-6 mb-2 text-lg font-semibold">Items Received</h4>
      <ul className="list-disc list-inside">
        {bundle.itemsReceived.map((i, idx) => (
          <li key={idx}>
            {i.item} – {i.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}
