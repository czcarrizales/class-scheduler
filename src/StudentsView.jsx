import React, { useEffect, useState } from "react"
import Student from './models/Student.js'
import StudentRow from './StudentRow.jsx'

function StudentsView() {

    const [students, setStudents] = useState([])

    useEffect(() => {
        setStudents(Student.list())
        console.log(Student.list())
    }, [])

    useEffect(() => {
        console.log('students have changed!')
    }, [students])

    function addStudent() {
        Student.create({
            name: 'test',
            email: 'test@example',
            classes: ['biology', 'math']
        })
        const read = Student.list();
        console.log(read)
        console.log('student added')
        setStudents(Student.list())
    }

    function deleteAllStudents() {
        Student.clearAll()
        setStudents(Student.list())
    }

    return (
        <>
            <h1>
                Student View
            </h1>
            <button onClick={deleteAllStudents}>delete all students</button>
            <button onClick={addStudent}>add test student</button>

            {students.map((s) => {
                return (
                    <StudentRow key={s.id} name={s.name} email={s.email} id={s.id} setStudents={setStudents} />
                )

            })}
        </>
    );
}
export default StudentsView
