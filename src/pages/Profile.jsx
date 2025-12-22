import React, { useState, useEffect } from "react";
import "./Profile.css";

const Profile = () => {
  const userId = 1; // logged-in user id
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    id:"1",
    name: "",
    email: "",
    phone: "",
    image: "",
  });

  // 🔹 Fetch user from backend
  useEffect(() => {
    fetch(`http://localhost:5000/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((err) => console.error(err));
  }, []);

  // 🔹 Input change
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // 🔹 Image upload (Base64)
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfile({ ...profile, image: reader.result });
    };

    if (file) reader.readAsDataURL(file);
  };

  // 🔹 Save to JSON Server
  const handleSave = () => {
    fetch(`http://localhost:5000/users/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profile),
    })
       .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to update");
      }
      return res.json();
    })
    .then(() => {
      setIsEditing(false);
      alert("Profile Updated Successfully ✅");
    })
    .catch((err) => {
      console.error(err);
      alert("Update Failed ❌");
    });
};

  return (
    <div className="profile-page">
      <div className="profile-card card shadow-lg">
        <div className="card-header text-center text-white">
          <h4>My Profile</h4>
        </div>

        <div className="card-body p-4">
          
          {/* Profile Image */}
<div className="text-center mb-4">
  <div className="profile-img-wrapper">
    <img
      src={profile.image || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
      alt="Profile"
      className="profile-img"
    />

    {/* Overlay */}
    {isEditing && (
      <label className="profile-overlay">
        📷
        <input
          type="file"
          hidden
          accept="image/*"
          onChange={handleImageChange}
        />
      </label>
    )}
  </div>
</div>


          {/* Name */}
          <div className="mb-3">
            <label className="form-label fw-bold">Full Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={profile.name}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label fw-bold">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={profile.email}
              onChange={handleChange}
              disabled={!isEditing}
    
            />
          </div>

          {/* Phone */}
          <div className="mb-3">
            <label className="form-label fw-bold">Mobile Number</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>

          {/* Buttons */}
          <div className="d-flex justify-content-between">
            {!isEditing ? (
              <button
                className="btn btn-outline-primary"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>
            ) : (
              <button className="btn btn-primary" onClick={handleSave}>
                Save Changes
              </button>
            )}

            <button
              className="btn btn-outline-danger"
              onClick={() => alert("Logged out")}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
