import React, { useState } from 'react';
import './AddStudentView.css';
import Student from './models/Student'
import { useNavigate } from 'react-router-dom';

function AddStudentView({ setAllStudents }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  function addStudent(e) {
    e.preventDefault()
    if (name == '' || email == '') {
      return
    }
    Student.create({
      name: name,
      email: email,
      classes: []
    })
    setAllStudents(Student.list())
    navigate('/students')
  }

  return (
    <div className="add-student-container">
      <form className="form-card" onSubmit={addStudent}>
        <h2 className="form-title">Add Student</h2>

        <div className="form-group">
          <label>Name:</label>
          <input type="text" placeholder="Enter student name" onChange={(e) => setName(e.target.value)} required />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" placeholder="Enter student email" onChange={(e) => setEmail(e.target.value)} required />
        </div>

        <div className="button-group">
          <button className="cancel-button" onClick={() => navigate(-1)}>Cancel</button>
          <button type='submit' className="save-button">Save</button>
        </div>
      </form>
    </div>
  );

}

export default AddStudentView;
