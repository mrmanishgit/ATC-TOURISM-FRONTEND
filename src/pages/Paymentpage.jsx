import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Payment = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // ✅ redirect safely if page refreshed
  useEffect(() => {
    if (!state) {
      navigate("/booking");
    }
  }, [state, navigate]);

  const handlePayment = () => {
    alert("Payment Successful ");
    navigate("/success");
  };

  if (!state) return null;

  return (
    <div className="container mt-5">
      <div className="card p-4">
        <h3>Payment Gateway</h3>

        <p><strong>Adults:</strong> {state.adults}</p>
        <p><strong>Children:</strong> {state.children}</p>
        <p><strong>Total Amount:</strong> ₹{state.amount}</p>

        <hr />

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Card Number"
        />

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Card Holder Name"
        />

        <div className="d-flex gap-3 mb-3">
          <input type="text" className="form-control" placeholder="MM/YY" />
          <input type="text" className="form-control" placeholder="CVV" />
        </div>

        <button className="btn btn-success w-100" onClick={handlePayment}>
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Payment;
