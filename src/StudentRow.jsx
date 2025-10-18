import './StudentRow.css'
import { useEffect, useState } from 'react'
import Student from './models/Student'

function StudentRow({ name, id, email, setStudents }) {
    const [studentInfo, setStudentInfo] = useState({})
    const [studentName, setStudentName] = useState('')
    const [studentEmail, setStudentEmail] = useState('')
    const [editing, setEditing] = useState(false)

    useEffect(() => {
        const initialStudentInfo = Student.get(id)
        console.log(initialStudentInfo)
        setStudentInfo(initialStudentInfo)
        setStudentName(initialStudentInfo.name)
        setStudentEmail(initialStudentInfo.email)
    }, [])

    useEffect(() => {
        console.log(studentInfo)
        console.log('student info has changed')
    }, [studentInfo])

    function deleteStudent(id) {
        console.log(id)
        Student.remove(id)
        setStudents(Student.list())
    }

    function updateStudent(id, patch) {
        Student.update(id, patch)
        const updatedStudent = Student.get(id)
        setStudentInfo(updatedStudent)
        console.log(updatedStudent)
        setEditing(false)
    }

    return (
        <>
            {
                editing
                    ?
                    <div className='student-row-main'>
                        <input value={studentName} onChange={(e) => setStudentName(e.target.value)} />
                        <p>{id}</p>
                        <input value={studentEmail} onChange={(e) => setStudentEmail(e.target.value)} />
                        <button onClick={() => setEditing(!editing)}>Cancel</button>
                        <button onClick={() => updateStudent(id, {
                            name: studentName,
                            email: studentEmail
                        })}>Save</button>
                    </div>
                    :
                    <div className='student-row-main'>
                        <p>{studentName}</p>
                        <p>{studentInfo.id}</p>
                        <p>{studentEmail}</p>
                        <button onClick={() => setEditing(!editing)}>Edit</button>
                        <button onClick={() => deleteStudent(id)}>Delete</button>
                    </div>
            }
        </>

    )
}

export default StudentRow