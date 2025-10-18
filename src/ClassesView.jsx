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


  return (
    <div className="classes-view">
      <div className="classes-content">
        <h1 className="classes-title">Classes View</h1>

        {/* Available Classes */}
        <div className="class-list">
          {classes.map((cls, index) => (
            <div key={index} className="class-card">
              <div className="class-info">
                <h2 className="class-name">{cls.name}</h2>
                <p className="class-days">{cls.days}</p>
              </div>
              <div className="class-time">{cls.time}</div>
              <button
                className="add-button"
                onClick={() => handleAddClass(cls)}
              >
                Add
              </button>
            </div>
          ))}
        </div>


        {/* My Classes Section */}
        {myClasses.length > 0 && (
          <div className="my-classes">
            <div className="my-classes-header">
              <h2 className="my-classes-title">My Classes</h2>
            </div>

            <ul className="my-classes-list">
              {myClasses.map((cls, index) => (
                <li key={index} className="my-class-item">
                  <span>{cls.name}</span>
                  <span>{cls.days}</span>
                  <span>{cls.time}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default ClassesView;
