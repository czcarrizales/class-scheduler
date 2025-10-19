// src/ClassesView.jsx
import React, { useState, useEffect } from 'react';
import './ClassesView.css';

function ClassesView() {
  const classes = [
    { name: 'CS 3240', days: 'Mon/Wed', time: '10:00AM - 11:15AM' },
    { name: 'CS 3350', days: 'Tue/Thu', time: '1:00PM - 2:15PM' },
    { name: 'CS 2210', days: 'Mon/Wed', time: '2:30PM - 3:45PM' },
  ];

  const [myClasses, setMyClasses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Function to add
  const handleAddClass = (selectedClass) => {
    setMyClasses((prev) => [...prev, selectedClass]);
  };

  // Function to remove
  const handleRemoveClass = (indexToRemove) => {
    setMyClasses((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  // Function to search
  const filteredClasses = classes.filter((cls) =>
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
                <div className="days">{cls.days}</div>
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
              {myClasses.map((cls, index) => (
                <div key={index} className="row-main">
                  <div className="course">{cls.name}</div>
                  <div className="days">{cls.days}</div>
                  <div className="time">{cls.time}</div>
                  <button
                    className="remove-button" onClick={() => handleRemoveClass(index)}
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