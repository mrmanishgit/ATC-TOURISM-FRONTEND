import React, { useState } from "react";
import "./RegisterPage.css";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword:"",
    dob: "",
    nationality:"",
    aadhar:"",
    passport:"",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e) => {
    setForm({ ...form, photo: e.target.files[0] });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // simple validation
    if (!form.name || !form.mobile || !form.email || !form.password || !form.dob) {
      alert("Please fill required fields.");
      return;
    }
    //Check password conformation
    if (form.password !==form.confirmPassword){
      alert("Please enter correct password.");
      return;
    }
    if (!form.nationality) {
       alert("Please enter your nationality.).");
       return;
    }
    if (form.nationality === "Aadhar" && !form.aadhar){
      alert("Please enter your aadhar Number.")
      return;
    }
    if (form.nationality === "Passport" && !form.passport){
      alert("Please enter your passport Number.")
      return;
    }
    
    alert(`Registered successfully! Welcome ${form.name}`);
    console.log(form);
  };

  return (
    
    <div className="page">
      
    <div className="register-page">
      <div className="form-container">
        <h2>Register Your Account </h2>

        
        <form onSubmit={handleSubmit}>
          <label>Full Name:</label>
          <input type="text" name="name" placeholder="Full Name" onChange={handleChange} />
          <label>Mobile</label>
          <input type="tel" name="mobile" placeholder="Mobile Number" onChange={handleChange} />
          <label>Email:</label>
          <input type="email" name="email" placeholder="Email ID" onChange={handleChange} />
          <label>Password:</label>
          <input type="password" name="password" placeholder="Password" onChange={handleChange} />
          <label>confirmPassword:</label>
          <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} />
          <label>Date of Birth:</label>
          <input type="date" name="dob" placeholder="Date of Birth"  onChange={handleChange} />
          <div className="radio-group">
            <label>
              <input type="radio" name="nationality" value="Indian" checked={form.nationality === "Indian"} onChange={handleChange}/>
              Indian
            </label>
            <label>
              <input type="radio" name="nationality" value="Non Indian" checked={form.nationality === "Non Indian"} onChange={handleChange}/>
              Non Indian
            </label>
          </div>
          {form.nationality === "Indian" &&  (
            <input type="text" name="aadhar" placeholder="Aadhar Number" maxLength="12" onChange={handleChange}/>
          )}
          {form.nationality === "Non Indian" && (
            <input type="text" name="passport" placeholder="Passport Number" onChange={handleChange}/>
          )}
        
              <label className="file-upload">
              Upload Photo:
            <input type="file" accept="image/*" onChange={handleFileChange} />
          </label>
          <button type="submit">Register Now</button>
          <p className="signin">
            Alredy Have an account? <a href="#">Sign In</a>
          </p>
        </form>
        </div>
      </div> 
    </div>

  
                
  );             
  };


export default Register;
