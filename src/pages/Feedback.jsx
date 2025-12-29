import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Feedback.css";

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [search, setSearch] = useState("");

  // 🔹 1) Define function BEFORE useEffect
  const fetchFeedbacks = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/testmonial/all");
      setFeedbacks(res.data);
    } catch (error) {
      console.error(error);
      alert("Failed to load feedbacks");
    }
  };


useEffect(() => {
  const loadData = async () => {
    await fetchFeedbacks(); 
  };
  loadData();
}, []);


  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    try {
      await axios.delete(`http://localhost:8080/api/testmonial/remove/${id}`);
      setFeedbacks((prev) => prev.filter((f) => f.id !== id));
    } catch (error) {
      console.error(error);
      alert("Delete failed");
    }
  };

  const filteredFeedbacks = feedbacks.filter(
    (f) =>
      f.name?.toLowerCase().includes(search.toLowerCase()) ||
      (f.packageName || "")
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  const renderStars = (rating = 0) => {
    const r = parseInt(rating);
    return "★".repeat(r) + "☆".repeat(5 - r);
  };

  return (
    <div className="feedback-container">
      <div className="feedback-header">
        <h2>Feedback List</h2>
        <input
          className="feedback-search"
          placeholder="Search by Name or Package"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <table className="feedback-table">
        <thead>
          <tr>
            <th>#</th><th>Name</th><th>Package</th><th>Rating</th><th>Review</th><th>Action</th>
          </tr>
        </thead>

       <tbody>
  {filteredFeedbacks.length === 0 ? (
    <tr>
      <td colSpan="6" className="no-data">No feedback found</td>
    </tr>
  ) : (
    filteredFeedbacks.map((f, index) => {
      const actualId = f.id || f.testimonialId || f.testmonialId; // 🔥 Choose real ID
      return (
        <tr key={actualId}>
          <td>{index + 1}</td>
          <td>{f.name}</td>
          <td>{f.packageName || "N/A"}</td>
          <td className="rating-stars">{renderStars(f.rating)}</td>
          <td>{f.review}</td>
          <td>
            <button
              className="delete-btn"
              onClick={() => handleDelete(actualId)} // 🔥 Correct delete ID
            >
              ❌
            </button>
          </td>
        </tr>
      );
    })
  )}
</tbody>

      </table>
    </div>
  );
};

export default Feedback;
