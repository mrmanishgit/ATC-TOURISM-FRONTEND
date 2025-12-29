import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./PackagesPage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
 
function PackagesPage() {
 
  const navigate = useNavigate();
 
  // 🔹 State for backend data
  const [packages, setPackages] = useState([]);
  const [error, setError] = useState("");

  // 🔗 Map backend packageId → direct route pages
  const packageRoutes = {
    5: "/family-package",
    6: "/spiritual-package",
    7: "/adventure-package",
    8: "/couple-package",
    9: "/friends-package",
    10: "/students-package",
    11: "/children-package",
    12: "/historical-package",
    13: "/women-package",


  };
 
  const fetchPackages = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/api/packages/all"
      );
      setPackages(res.data);   // ← how many rows → that many cards
      setError("");
    } catch (err) {
      console.error("Failed to load packages", err);
      setError("Failed to load packages. Please check backend.");
    }
  };
 
  useEffect(() => {
    const loadData = async () => {
      await fetchPackages();
    };
    loadData();
  }, []);
 
  return (
    <div className="packages-page">
      <Navbar />
      <div className="particles1"></div>
 
      {/* HEADER */}
      <header className="page-header1">
        <div className="header-overlay1">
          <h1>Explore Hyderabad</h1>
          <p>Plan • Travel • Experience the Royal Heritage</p>
        </div>
      </header>
 
      {/* PACKAGES GRID */}
      <div className="container1">
 
        {/* Optional error */}
        {error && <p style={{ color: "red" }}>{error}</p>}
 
        <div className="grid1">
          {packages.map((pkg) => (
            <div className="package-card1" key={pkg.packageId}>
 
              <div className="img-container1">
                <img
                  src={pkg.imageUrl}
                  alt={pkg.packageName}
                />
              </div>
 
              <div className="card-content1">
                <h3>{pkg.packageName}</h3>
               <p>₹{pkg.adultPrice + pkg.foodPrice + pkg.pickupPrice}</p>

 
                <button
                  onClick={() => {
                    const route = packageRoutes[pkg.packageId];
                    route
                      ? navigate(route)
                      : alert("⚠️ Page not created for this package ID");
                  }}
                >
                  Book Now
                </button>
 
              </div>
            </div>
          ))}
        </div>
 
      </div>
    </div>
  );
}
 
export default PackagesPage;
