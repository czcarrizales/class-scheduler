import React from 'react';
import './AddStudentView.css';

function AddStudentView() {
  return (
    <div className="add-student-container">
      <div className="form-card">
        <h2 className="form-title">Add Student</h2>

        <div className="form-group">
          <label>Name:</label>
          <input type="text" placeholder="Enter student name" />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" placeholder="Enter student email" />
        </div>

        <div className="button-group">
          <button className="cancel-button">Cancel</button>
          <button className="save-button">Save</button>
        </div>
      </div>
    </div>
  );

}

export default AddStudentView;
