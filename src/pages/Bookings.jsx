import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Bookings.css"; // Custom CSS for animations and background

const Bookings = () => {
  const [userId, setUserId] = useState("");
  const [packageId, setPackageId] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [hotelStar, setHotelStar] = useState("");
  const [mealsIncluded, setMealsIncluded] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    if (!hotelStar || adults < 1) {
      setTotalAmount(0);
      return;
    }

    const starPrice =
      hotelStar === "3" ? 2000 : hotelStar === "4" ? 3000 : 4000;
    const mealPrice = mealsIncluded ? 500 : 0;

    const amount =
      adults * (starPrice + mealPrice) +
      children * ((starPrice + mealPrice) / 2);

    setTotalAmount(amount);
  }, [adults, children, hotelStar, mealsIncluded]);

  const validateForm = () => {
    const newErrors = {};
    if (!userId.trim()) newErrors.userId = "User ID is required";
    if (!packageId.trim()) newErrors.packageId = "Package ID is required";

    if (!travelDate) {
      newErrors.travelDate = "Travel date is required";
    } else if (new Date(travelDate) < new Date().setHours(0, 0, 0, 0)) {
      newErrors.travelDate = "Travel date cannot be in the past";
    }

    if (adults < 1) newErrors.adults = "At least 1 adult is required";
    if (!hotelStar) newErrors.hotelStar = "Please select hotel category";
    if (totalAmount <= 0) newErrors.amount = "Total amount must be valid";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    navigate("/Payment", {
      state: {
        userId,
        packageId,
        travelDate,
        adults,
        children,
        hotelStar,
        mealsIncluded,
        amount: totalAmount,
      },
    });
  };

  return (
    <div className="booking-bg">
      <div className="container mt-5 animated-card">
        <div className="card shadow mx-auto booking-card">
          <div className="card-header bg-primary text-white fade-in">
            <h4 className="mb-0">My Booking</h4>
          </div>

          <div className="card-body fade-in">
            <form onSubmit={handleSubmit} noValidate>
              {/* User ID */}
              <div className="mb-3">
                <input
                  type="text"
                  className={`form-control ${errors.userId ? "is-invalid" : ""}`}
                  placeholder="User ID"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                />
                <div className="invalid-feedback">{errors.userId}</div>
              </div>

              {/* Package ID */}
              <div className="mb-3">
                <input
                  type="text"
                  className={`form-control ${errors.packageId ? "is-invalid" : ""}`}
                  placeholder="Package ID"
                  value={packageId}
                  onChange={(e) => setPackageId(e.target.value)}
                />
                <div className="invalid-feedback">{errors.packageId}</div>
              </div>

              {/* Travel Date */}
              <div className="mb-3">
                <input
                  type="date"
                  className={`form-control ${errors.travelDate ? "is-invalid" : ""}`}
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                />
                <div className="invalid-feedback">{errors.travelDate}</div>
              </div>

              {/* Guests */}
              <div className="mb-4">
                <label className="form-label fw-bold">Guests</label>
                <div className="row g-3">
                  <p className="guest-note">Note: Children must be under 10 years</p>
                  <div className="col-md-6 guest-card">
                    <div className="border rounded p-3 d-flex justify-content-between align-items-center">
                      <span className="fw-bold">Adults</span>
                      <div className="d-flex align-items-center gap-2">
                        <button
                          type="button"
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => setAdults(Math.max(1, adults - 1))}
                        >
                          -
                        </button>
                        <span className="fw-bold px-2">{adults}</span>
                        <button
                          type="button"
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => setAdults(adults + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    {errors.adults && <div className="text-danger small mt-1">{errors.adults}</div>}
                  </div>

                  <div className="col-md-6 guest-card">
                    <div className="border rounded p-3 d-flex justify-content-between align-items-center">
                      <span className="fw-bold">Children</span>
                      <div className="d-flex align-items-center gap-2">
                        <button
                          type="button"
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => setChildren(Math.max(0, children - 1))}
                        >
                          -
                        </button>
                        <span className="fw-bold px-2">{children}</span>
                        <button
                          type="button"
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => setChildren(children + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hotel Category */}
              <div className="mb-3">
                <label className="form-label fw-bold">Hotel Category</label>
                <div className="d-flex gap-4">
                  {["3", "4", "5"].map((star) => (
                    <div className="form-check" key={star}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="hotelStar"
                        value={star}
                        checked={hotelStar === star}
                        onChange={(e) => setHotelStar(e.target.value)}
                      />
                      <label className="form-check-label">{star} Star Hotel</label>
                    </div>
                  ))}
                </div>
                {errors.hotelStar && <div className="text-danger small mt-1">{errors.hotelStar}</div>}
              </div>

              {/* Meals */}
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={mealsIncluded}
                  onChange={(e) => setMealsIncluded(e.target.checked)}
                />
                <label className="form-check-label fw-bold">
                  Meals Included (+ ₹500 per person)
                </label>
              </div>

              {/* Total Amount */}
              <div className="mb-4">
                <label className="form-label fw-bold">Total Amount</label>
                <input
                  type="text"
                  className={`form-control ${errors.amount ? "is-invalid" : ""}`}
                  value={`₹ ${totalAmount}`}
                  readOnly
                />
                <div className="invalid-feedback">{errors.amount}</div>
              </div>

              <button
                type="button"
                className="btn btn-success w-100 btn-animate"
                onClick={handleSubmit}
              >
                Proceed to Payment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
