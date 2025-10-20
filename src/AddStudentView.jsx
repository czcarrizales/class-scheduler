import React, { useState } from 'react';
import './AddStudentView.css';
import Student from './models/Student'

function AddStudentView({setAllStudents}) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  function addStudent() {
    Student.create({
      name: name,
      email: email,
      classes: []
    })
    setAllStudents(Student.list())
  }

  return (
    <div className="add-student-container">
      <div className="form-card">
        <h2 className="form-title">Add Student</h2>

        <div className="form-group">
          <label>Name:</label>
          <input type="text" placeholder="Enter student name" onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" placeholder="Enter student email" onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="button-group">
          <button className="cancel-button">Cancel</button>
          <button className="save-button" onClick={() => addStudent()}>Save</button>
        </div>
      </div>
    </div>
  );

}

export default AddStudentView;
