import './StudentRow.css'
import { useEffect, useState } from 'react'
import Student from './models/Student'

function StudentRow({ name, id, email, setAllStudents, mainStudent, setMainStudent }) {
    const [studentInfo, setStudentInfo] = useState({})
    const [studentName, setStudentName] = useState('')
    const [studentEmail, setStudentEmail] = useState('')
    const [editing, setEditing] = useState(false)

    useEffect(() => {
        const initialStudentInfo = Student.get(id)
        setStudentInfo(initialStudentInfo)
        setStudentName(initialStudentInfo.name)
        setStudentEmail(initialStudentInfo.email)
        console.log(mainStudent)
        console.log(studentInfo)
    }, [])

    function deleteStudent(id) {
        Student.remove(id)
        const list = Student.list();
        setAllStudents(list)
        setMainStudent(prev => (prev?.id === mainStudent.id ? (list[0] ?? null) : prev))
    }

    function updateStudent(id, patch) {
        Student.update(id, patch)
        const updatedStudent = Student.get(id)
        setStudentInfo(updatedStudent)
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
                        <button className='cancel-edit' onClick={() => setEditing(!editing)}>Cancel</button>
                        <button className='save-edit' onClick={() => updateStudent(id, {
                            name: studentName,
                            email: studentEmail
                        })}>Save</button>
                    </div>
                    :
                    <div className='student-row-main'>
                        <p>{studentName}</p>
                        <p>{studentInfo.id}</p>
                        <p>{studentEmail}</p>

                        {mainStudent?.id === id && (
                            <>
                                <button className='edit-student' onClick={() => setEditing(!editing)}>Edit</button>
                                <button className='delete-student' onClick={() => deleteStudent(id)}>Delete</button>
                            </>
                        )}



                    </div>
            }
        </>

    )
}

export default StudentRow