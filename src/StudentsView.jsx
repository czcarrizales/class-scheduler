import React, { useEffect, useState } from "react"
import Student from './models/Student.js'
import StudentRow from './StudentRow.jsx'

function StudentsView({allStudents, setAllStudents}) {

    useEffect(() => {
        setAllStudents(Student.list())
        console.log(Student.list())
    }, [])

    useEffect(() => {
        console.log('students have changed!')
    }, [allStudents])

    function addStudent() {
        Student.create({
            name: 'test',
            email: 'test@example',
            classes: [{
                id: "film101",
                name: "Film 101",
                dates: ["Monday", "Wednesday"],
                time: "6:00–8:30 PM",
            }]
        })
        const read = Student.list();
        console.log(read)
        console.log('student added')
        setAllStudents(Student.list())
    }

    function deleteAllStudents() {
        Student.clearAll()
        setAllStudents(Student.list())
    }

    return (
        <>
            <h1>
                Student View
            </h1>
            <button onClick={deleteAllStudents}>delete all students</button>
            <button onClick={addStudent}>add test student</button>

            {allStudents.map((s) => {
                return (
                    <StudentRow key={s.id} name={s.name} email={s.email} id={s.id} setAllStudents={setAllStudents} />
                )

            })}
        </>
    );
}
export default StudentsView
