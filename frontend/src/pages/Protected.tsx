import { useState } from "react";
import api from "../api";

export default function Protected() {
  const [message, setMessage] = useState("");

  const getProtected = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await api.get("/posts/protected", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessage(res.data.message);
    } catch {
      setMessage("Access denied");
    }
  };

  return (
    <div>
      <h2>Protected Area</h2>
      <button onClick={getProtected}>Access</button>
      {message && <p>{message}</p>}
    </div>
  );
}
