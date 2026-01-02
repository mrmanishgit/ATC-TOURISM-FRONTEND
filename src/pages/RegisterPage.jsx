import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterPage.css";
 import api from "../api/api";
const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
    nationality: "",
    aadhar: "",
    passport: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e) => {
    setForm({ ...form, photo: e.target.files[0] });
  };



//  const handleSubmit = async (e) => {
//   e.preventDefault();

//   if (!form.name || !form.mobile || !form.email || !form.password || !form.dob) {
//     alert("Please fill required fields.");
//     return;
//   }

//   if (form.password !== form.confirmPassword) {
//     alert("Passwords do not match.");
//     return;
//   }

//   if (!form.nationality) {
//     alert("Please select nationality.");
//     return;
//   }

//   if (form.nationality === "Indian" && !form.aadhar) {
//     alert("Please enter Aadhar number.");
//     return;
//   }

//   if (form.nationality === "Non Indian" && !form.passport) {
//     alert("Please enter Passport number.");
//     return;
//   }

//   /* ===== SEND JSON ONLY (NO MULTIPART) ===== */

//   const payload = {
//     fullName: form.name,
//     email: form.email,
//     mobileNo: form.mobile,
//     password: form.password,
//     confirmPassword: form.confirmPassword,
//     dateOfBirth: form.dob,
//     nationality: form.nationality === "Indian" ? "INDIAN" : "NON_INDIAN",
//    // identityProofType: form.nationality === "Indian" ? "AADHAR" : "PASSPORT",
//     identityProofType:form.nationality === "Indian" ? "AADHAR" : "PASSPORT",
//     identityProofNumber: form.nationality === "Indian" ? form.aadhar : form.passport,

//     // photo handled normally (file name only)
//     profileImage: form.photo ? form.photo.name : null,
//   };

//   try {
//     // const response = await fetch("http://localhost:8080/api/users/add", {
//     //   method: "POST",
//     //   headers: {
//     //     "Content-Type": "application/json",
//     //   },
//     //   body: JSON.stringify(payload),
//     // });
// await api.post("/api/users/add", payload);

//     if (!response.ok) {
//       throw new Error("Registration failed");
//     }

//     alert(`Registered successfully! Welcome ${form.name}`);
//     navigate("/login");
//   } catch (error) {
//     console.error(error);
//     alert("Registration failed. Please try again.");
//   }
// };


const handleSubmit = async (e) => {
  e.preventDefault();

  if (!form.name || !form.mobile || !form.email || !form.password || !form.dob) {
    alert("Please fill required fields.");
    return;
  }

  if (form.password !== form.confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  if (!form.nationality) {
    alert("Please select nationality.");
    return;
  }

  if (form.nationality === "Indian" && !form.aadhar) {
    alert("Please enter Aadhar number.");
    return;
  }

  if (form.nationality === "Non Indian" && !form.passport) {
    alert("Please enter Passport number.");
    return;
  }

  const payload = {
    fullName: form.name,
    email: form.email,
    mobileNo: form.mobile,
    password: form.password,
    confirmPassword: form.confirmPassword,
    dateOfBirth: form.dob,
    nationality: form.nationality === "Indian" ? "INDIAN" : "NON_INDIAN",
    identityProofType: form.nationality === "Indian" ? "AADHAR" : "PASSPORT",
    identityProofNumber:
      form.nationality === "Indian" ? form.aadhar : form.passport,
    profileImage: form.photo ? form.photo.name : null,
  };

  try {
    await api.post("/api/users/add", payload);

    alert(`Registered successfully! Welcome ${form.name} ✅`);
    navigate("/login");

  } catch (error) {
    console.error("Registration error:", error);
    alert(
      error.response?.data?.message ||
      "Registration failed. Please try again."
    );
  }
};

  return (
    <div className="page">
      <div className="register-page">
        <h2>Register Your Account</h2>
        <p className="tagline">Join AJA Tourism & explore with ease</p>

        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input type="text" name="name" placeholder="Full Name" onChange={handleChange} />

          <label>Mobile</label>
          <input type="tel" name="mobile" placeholder="Mobile Number" onChange={handleChange} />

          <label>Email</label>
          <input type="email" name="email" placeholder="Email ID" onChange={handleChange} />

          <label>Password</label>
          <input type="password" name="password" placeholder="Password" onChange={handleChange} />

          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} />

          <label>Date of Birth</label>
          <input type="date" name="dob" onChange={handleChange} />

          <div className="radio-group">
            <label>
              <input type="radio" name="nationality" value="Indian" onChange={handleChange} />
              Indian
            </label>
            <label>
              <input type="radio" name="nationality" value="Non Indian" onChange={handleChange} />
              Non Indian
            </label>
          </div>

          {form.nationality === "Indian" && (
            <input type="text" name="aadhar" placeholder="Aadhar Number" maxLength="12" onChange={handleChange} />
          )}

          {form.nationality === "Non Indian" && (
            <input type="text" name="passport" placeholder="Passport Number" onChange={handleChange} />
          )}

          <label className="file-upload">
            Upload Photo
            <input type="file" accept="image/*" onChange={handleFileChange} />
          </label>

          <button type="submit">Register Now</button>

          <p className="signin">
            Already have an account?
            <span onClick={() => navigate("/login")}> Sign In</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
