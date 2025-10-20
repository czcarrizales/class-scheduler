// src/ClassesView.jsx
import React, { useState, useEffect } from 'react';
import Class from './models/Class.js'
import Student from './models/Student.js'
import './ClassesView.css';

function ClassesView({ mainStudent, setMainStudent }) {

  const [availableClasses, setAvailableClasses] = useState([]);
  const [myClasses, setMyClasses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setAvailableClasses(Class.list())
  }, [])

  useEffect(() => {
    console.log('main student update so update classes view')
    if (!mainStudent || Object.keys(mainStudent).length === 0) {
      setMyClasses([])
      return
    }
    setMyClasses(mainStudent.classes)
    console.log(mainStudent.classes)
  }, [mainStudent])

  // Function to add
  const handleAddClass = (selectedClass) => {
    if (myClasses.some(c => c.id === selectedClass.id)) {
    console.log("Class already added.");
    return;
  }
    const updatedClasses = [...myClasses, selectedClass]
    const updatedStudent = Student.update(mainStudent.id, {
      classes: updatedClasses
    })
    setMainStudent(updatedStudent)
  };

  // Function to remove
  const handleRemoveClass = (classToRemove) => {
    console.log(classToRemove)
    const filtered = mainStudent.classes.filter(cls => cls.id !== classToRemove)
    console.log(filtered)
    const updatedStudent = Student.update(mainStudent.id, {
      classes: filtered
    })
    console.log(updatedStudent)
    setMainStudent(updatedStudent)
  };

  // Function to search
  const filteredClasses = availableClasses.filter((cls) =>
    cls.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="classes-view">
      <div className="classes-content">
        <h1 className="classes-title">Classes View</h1>

        {/* Search */}
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search classes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Available Classes */}
        <h2>Available Classes</h2>
        <div className="class-list">
          {filteredClasses.length > 0 ? (
            filteredClasses.map((cls, index) => (
              <div key={index} className="row-main">
                <div className="course">{cls.name}</div>
                <div className="days">{cls.dates}</div>
                <div className="time">{cls.time}</div>
                <button className="add-button" onClick={() => handleAddClass(cls)}>
                  Add
                </button>
              </div>
            ))
          ) : (
            <p>No classes found.</p>
          )}
        </div>

        {/*  My Classes */}
        {myClasses.length > 0 && (
          <div className="my-classes">
            <div className="class-list">
              <h2> My Classes </h2>
              {myClasses.map((cls) => (
                <div key={cls.id} className="row-main">
                  <div className="course">{cls.name}</div>
                  <div className="days">{cls.dates}</div>
                  <div className="time">{cls.time}</div>
                  <button
                    className="remove-button" onClick={() => handleRemoveClass(cls.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ClassesView;