import React, { useEffect, useState } from "react";
import "../styles/DestinationsPage.css";
import api from "../api/api";

const DestinationPage = () => {
  const [destinations, setDestinations] = useState([]);
  const [search, setSearch] = useState("");

  /* ✔ FETCH DESTINATIONS */
  const fetchDestinations = async () => {
    try {
      const res = await api.get("/api/destinations/all");
      setDestinations(res.data);
    } catch (error) {
      console.error("Fetch Error:", error);
      alert("Failed to load destinations");
    }
  };

  useEffect(() => {
    const loadData = async () => {
      await fetchDestinations();
    };
    loadData();
  }, []);

  /* ➕ ADD */
  const handleAdd = async () => {
    const placeId = prompt("Enter Place ID");
    const description = prompt("Enter Description");
    const imageUrl = prompt("Enter Image URL");

    if (!placeId) return;

    try {
      await api.post("/api/destinations/create", {
        placeId,
        description,
        imageUrl,
      });

      alert("Destination added");
      fetchDestinations();
    } catch (error) {
      console.error("Add Error:", error);
      alert("Add failed");
    }
  };

  /* ✏️ UPDATE */
  const handleUpdate = async (d) => {
    const placeId = prompt("Update Place ID", d.placeId);
    const description = prompt("Update Description", d.description);
    const imageUrl = prompt("Update Image URL", d.imageUrl);

    try {
      await api.put(`/api/destinations/update/${d.destinationId}`, {
        placeId,
        description,
        imageUrl,
      });

      alert("Destination updated");
      fetchDestinations();
    } catch (error) {
      console.error("Update Error:", error);
      alert("Update failed");
    }
  };

  /* 🔍 VIEW */
  const handleView = async (id) => {
    try {
      const res = await api.get(`/api/destinations/${id}`);

      alert(
        `Destination Details:\n\nPlace: ${res.data.placeName}\nDescription: ${res.data.description}`
      );
    } catch (error) {
      console.error("View Error:", error);
      alert("Fetch failed");
    }
  };

  /* ❌ DELETE */
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this destination?")) return;

    try {
      await api.delete(`/api/destinations/delete/${id}`);
      setDestinations((prev) =>
        prev.filter((d) => d.destinationId !== id)
      );
      alert("Deleted");
    } catch (error) {
      console.error("Delete Error:", error);
      alert("Delete failed");
    }
  };

  const filteredDestinations = destinations.filter((d) => {
    const placeName = d.placeName ? d.placeName.toLowerCase() : "";
    const searchText = search.toLowerCase();

    return (
      placeName.includes(searchText) ||
      d.destinationId?.toString().includes(search)
    );
  });

  return (
    <div className="destination-container">
      <div className="destination-header">
        <h2>Destinations</h2>

        <input
          className="destination-search"
          placeholder="Search by ID or Place"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button className="add-btn" onClick={handleAdd}>
          ➕ Add Destination
        </button>
      </div>

      <table className="destination-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Place</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredDestinations.map((d, index) => (
            <tr key={d.destinationId}>
              <td>{index + 1}</td>

              <td>
                <img
                  src={d.imageUrl || "https://via.placeholder.com/80"}
                  alt={d.placeName}
                  className="destination-img"
                />
              </td>

              <td>{d.placeName}</td>
              <td>{d.description}</td>

              <td className="actions-cell">
                <button onClick={() => handleView(d.destinationId)}>🔍</button>
                <button onClick={() => handleUpdate(d)}>✏️</button>
                <button onClick={() => handleDelete(d.destinationId)}>❌</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DestinationPage;
