import React, { useState } from "react";
import "./GiveReview.css";
import { useNavigate } from "react-router-dom";
function StarRating({ rating, setRating, readOnly = false, size = 24 }) {
  const [hover, setHover] = useState(0);
  const current = hover || rating;
  return (
    <div className="stars" style={{ fontSize: size, lineHeight: 1 }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          className="star"
          aria-label={`${star} star${star > 1 ? "s" : ""}`}
          onClick={() => !readOnly && setRating(star)}
          onMouseEnter={() => !readOnly && setHover(star)}
          onMouseLeave={() => !readOnly && setHover(0)}
          style={{
            cursor: readOnly ? "default" : "pointer",
            color: current >= star ? "#facc15" : "#d1d5db",
            background: "transparent",
            border: "none",
            padding: 0,
          }}
        >
          ★
        </button>
      ))}
    </div>
  );
}
const GiveReview = () => {
   const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    packageName: "",
    review: "",
    photoFile: null,
    rating: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle photo upload
  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, photoFile: file }));
  };

  // ===================== UPDATED SUBMIT FUNCTION =====================
const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.name || !formData.packageName || !formData.review) {
    alert("Please fill all required fields");
    return;
  }

  const formDataToSend = new FormData();
  formDataToSend.append("name", formData.name);
  formDataToSend.append("rating", formData.rating.toString());
  formDataToSend.append("review", formData.review);

  if (formData.photoFile) {
    formDataToSend.append("image", formData.photoFile); 
  }

  try {
    const res = await fetch("http://localhost:8080/api/testmonial/create", {
      method: "POST",
      body: formDataToSend, // 
    });

    if (res.ok) {
      alert("Review Submitted Successfully!");
        navigate("/feedback")
    } else {
      alert("Something went wrong!");
    }
  } catch (error) {
    console.error("Error submitting review:", error);
    alert("Backend not connected!");
  }

  // Reset form after submission
  setFormData({
    name: "",
    packageName: "",
    review: "",
    photoFile: null,
    rating: 0,
  });
};
  return (
    <div className="bg-container">
      <div className="container">
        <div className="wrap">

          {/* Centered card */}
          <div className="card">
            <form onSubmit={handleSubmit} className="form">
              <div className="card-header">
                <h1>Enter Your Review</h1>
              </div>

              <div className="card-body">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="card-data"
                />

                <input
                  type="text"
                  name="packageName"
                  placeholder="Package Name"
                  value={formData.packageName}
                  onChange={handleChange}
                  className="card-data"
                />

                <textarea
                  name="review"
                  placeholder="Your Review"
                  value={formData.review}
                  onChange={handleChange}
                  className="card-data"
                  rows={4}
                />

                {/* Rating control */}
                <div className="field">
                  <label className="label">Rating</label>
                  <StarRating
                    rating={formData.rating}
                    setRating={(r) => setFormData((prev) => ({ ...prev, rating: r }))}
                  />
                </div>

                {/* Photo upload + preview */}
                <div className="field">
                  <label className="label">Photo (optional)</label>
                  <input type="file" accept="image/*" onChange={handlePhotoChange} className="card-data" />
                  {formData.photoFile && (
                    <img
                      className="preview"
                      src={URL.createObjectURL(formData.photoFile)}
                      alt="Preview"
                      width={80}
                      height={80}
                    />
                  )}
                </div>

                <button type="submit" className="btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiveReview;
