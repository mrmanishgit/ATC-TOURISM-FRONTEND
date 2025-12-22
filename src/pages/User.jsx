import { Link, useNavigate } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Logged out successfully");
    navigate("/");
  };

  return (
    <div className="user-menu">
      <Link to="/bookings">Bookings</Link>
      <Link to="/profile">Profile</Link>
      {/* <Link to="/payment">Paymentpage</Link> */}

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default User;

