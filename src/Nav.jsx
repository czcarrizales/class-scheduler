import { Link } from 'react-router-dom'
import './Nav.css'
import Student from './models/Student.js'
import { useEffect, useState } from 'react'

function Nav({mainStudent, setMainStudent, allStudents}) {

    const [studentDropdownList, setStudentDropdownList] = useState([])

    useEffect(() => {
        setStudentDropdownList(Student.list())
    }, [allStudents])

    useEffect(() => {
    }, [mainStudent])

    return (
        <>
            <div className='nav-main'>
                <div className='nav-links'>
                    <Link to="/" className='nav-link'>Schedule</Link>
                    <Link to="classes" className='nav-link'>Classes</Link>
                    <Link to="students" className='nav-link'>Students</Link>
                </div>
                <div className='nav-offset'>
                    <select onChange={(e) => {
                        const selectedId = e.target.value;
                        const selected = Student.get(selectedId)
                        setMainStudent(selected)
                    }} className='student-dropdown'>
                        {
                            studentDropdownList.map((s) => {
                                return (
                                    <option key={s.id} value={s.id}>{s.name}</option>
                                )
                            })
                        }
                    </select>
                    <Link to="addstudent" className='add-student'>Add Student</Link>
                </div>

            </div>
        </>
    )
}

export default Nav