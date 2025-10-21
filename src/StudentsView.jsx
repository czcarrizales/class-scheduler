import React, { useEffect, useState } from "react"
import Student from './models/Student.js'
import StudentRow from './StudentRow.jsx'
import './StudentsView.css'

function StudentsView({allStudents, setAllStudents, mainStudent, setMainStudent}) {

    useEffect(() => {
        setAllStudents(Student.list())
    }, [])

    useEffect(() => {
    }, [allStudents])

    return (
        <div className="student-view-main">
            <h1>
                Student View
            </h1>
            {allStudents.map((s) => {
                return (
                    <StudentRow key={s.id} name={s.name} email={s.email} id={s.id} setAllStudents={setAllStudents} mainStudent={mainStudent} setMainStudent={setMainStudent} />
                )

            })}
        </div>
    );
}
export default StudentsView
