import React, { useState } from "react";
import Sidebardoc from "../Components/Sidebar/Sidebardoc";
import './style.css';

function UpdateMedicalRecord() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [medications, setMedications] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="update-medical-record">
      <div className="sidebar">
        <Sidebardoc />
      </div>
      <div className="form-container">
        <h2 className="medical-record-name">Medical Record Form</h2>
        <form className="medical-record-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Age:</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Gender:</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Blood Type:</label>
            <input
              type="text"
              value={bloodType}
              onChange={(e) => setBloodType(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Diagnosis:</label>
            <textarea
              value={diagnosis}
              onChange={(e) => setDiagnosis(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label>Medications:</label>
            <textarea
              value={medications}
              onChange={(e) => setMedications(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label>Notes:</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateMedicalRecord;
