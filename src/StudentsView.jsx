import React, { useEffect, useState } from "react"
import Student from './models/Student.js'
import StudentRow from './StudentRow.jsx'

function StudentsView({allStudents, setAllStudents, mainStudent, setMainStudent}) {

    useEffect(() => {
        setAllStudents(Student.list())
        console.log(Student.list())
    }, [])

    useEffect(() => {
        console.log('students have changed!')
    }, [allStudents])

    return (
        <>
            <h1>
                Student View
            </h1>
            {allStudents.map((s) => {
                return (
                    <StudentRow key={s.id} name={s.name} email={s.email} id={s.id} setAllStudents={setAllStudents} mainStudent={mainStudent} setMainStudent={setMainStudent} />
                )

            })}
        </>
    );
}
export default StudentsView
