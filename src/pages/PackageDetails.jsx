import React, { useEffect, useState } from "react";
import "../styles/PackageDetails.css";
import api from "../api/api";

const PackageDetails = () => {
  const [packages, setPackages] = useState([]);
  const [search, setSearch] = useState("");

  /* 🔹 FETCH PACKAGES */
  const fetchPackages = async () => {
    try {
      const res = await api.get("/api/packages/all");
      setPackages(res.data);
    } catch (error) {
      console.error("Fetch Error:", error);
      alert("Failed to load packages");
    }
  };

  useEffect(() => {
  const loadData = async () => {
    await fetchPackages();
  };
  loadData();
}, []);


  /* ➕ ADD PACKAGE */
  const handleAdd = async () => {
    const packageName = prompt("Enter Package Name");
    const durationDays = prompt("Enter Duration Days");
    const adultPrice = prompt("Enter Adult Price");
    const childPrice = prompt("Enter Child Price");
    const imageUrl = prompt("Enter Image URL (direct image link)");

    if (!packageName || !imageUrl) {
      alert("Package Name and Image URL are required");
      return;
    }

    try {
      await api.post("/api/packages/create", {
        packageName,
        durationDays: Number(durationDays),
        adultPrice: Number(adultPrice),
        childPrice: Number(childPrice),
        foodPrice: 0,
        pickupPrice: 0,
        gstPercentage: 18,
        imageUrl,
        state: { stateId: 1 },
      });

      alert("Package added successfully");
      fetchPackages();
    } catch (error) {
      console.error(error);
      alert("Add failed");
    }
  };

  /* ✏️ UPDATE PACKAGE */
  const handleUpdate = async (p) => {
    const packageName = prompt("Update Package Name", p.packageName);
    const durationDays = prompt("Update Duration Days", p.durationDays);
    const adultPrice = prompt("Update Adult Price", p.adultPrice);
    const childPrice = prompt("Update Child Price", p.childPrice);
    const imageUrl = prompt("Update Image URL", p.imageUrl);

    try {
      await api.put(`/api/packages/${p.packageId}`, {
        packageName,
        durationDays: Number(durationDays),
        adultPrice: Number(adultPrice),
        childPrice: Number(childPrice),
        foodPrice: p.foodPrice ?? 0,
        pickupPrice: p.pickupPrice ?? 0,
        gstPercentage: p.gstPercentage ?? 18,
        imageUrl,
        state: { stateId: p.state?.stateId || 1 },
      });

      alert("Package updated");
      fetchPackages();
    } catch (error) {
      console.error(error);
      alert("Update failed");
    }
  };

  /* 🔍 VIEW PACKAGE */
  const handleView = async (id) => {
    try {
      const res = await api.get(`/api/packages/${id}`);
      alert(
        `Package Details:\n\nName: ${res.data.packageName}
Duration: ${res.data.durationDays} days
Adult Price: ₹${res.data.adultPrice}
Image URL: ${res.data.imageUrl}`
      );
    } catch (error) {
      console.error("View Error:", error);
      alert("Fetch failed");
    }
  };

  /* ❌ DELETE PACKAGE */
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this package?")) return;

    try {
      await api.delete(`/api/packages/${id}`);
      setPackages((prev) => prev.filter((p) => p.packageId !== id));
      alert("Deleted");
    } catch (error) {
      console.error("Delete Error:", error);
      alert("Delete failed");
    }
  };

  const filteredPackages = packages.filter(
    (p) =>
      p.packageName.toLowerCase().includes(search.toLowerCase()) ||
      p.packageId.toString().includes(search)
  );

  return (
    <div className="package-container">
      <div className="package-header">
        <h2>Package List</h2>

        <input
          className="package-search"
          placeholder="Search by ID or Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button className="add-btn" onClick={handleAdd}>
          ➕ Add Package
        </button>
      </div>

      <table className="package-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Package Name</th>
            <th>Duration(Days)</th>
            <th>Adult Price</th>
            <th>Child Price</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredPackages.map((p, index) => (
            <tr key={p.packageId}>
              <td>{index + 1}</td>
              <td>
                <img
                  src={p.imageUrl}
                  alt={p.packageName}
                  className="package-img"
                />
              </td>
              <td>{p.packageName}</td>
              <td>{p.durationDays}</td>
              <td>₹ {p.adultPrice}</td>
              <td>₹ {p.childPrice}</td>
              <td>
                <button onClick={() => handleView(p.packageId)}>🔍</button>
                <button onClick={() => handleUpdate(p)}>✏️</button>
                <button onClick={() => handleDelete(p.packageId)}>❌</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PackageDetails;
