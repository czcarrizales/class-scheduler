import './App.css'
import Nav from './Nav'
import ScheduleView from './ScheduleView'
import StudentsView from './StudentsView'
import ClassesView from './ClassesView'
import AddStudentView from './AddStudentView'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StudentRow from './StudentRow'
import Class from './models/Class.js'
import Student from './models/Student.js'
import { useEffect, useState } from 'react'

function App() {

  const [mainStudent, setMainStudent] = useState(null)
  const [allStudents, setAllStudents] = useState([])

  useEffect(() => {
    Class.seed()
    setAllStudents(Student.list())
    const all = Student.list()
    setMainStudent(all[0] ?? null)
  }, [])

  useEffect(() => {
    if (!mainStudent || Object.keys(mainStudent).length === 0) {
      setMainStudent(allStudents[0])
    }
  }, [allStudents])

  useEffect(() => {
  if (!mainStudent && allStudents.length) {
    setMainStudent(allStudents[0]);
  }
}, [allStudents, mainStudent]);

  return (
    <>
      <BrowserRouter>
        <Nav mainStudent={mainStudent} setMainStudent={setMainStudent} allStudents={allStudents} />
        <Routes>
          <Route path='/' element={<ScheduleView mainStudent={mainStudent} allStudents={allStudents}/>} />
          <Route path='/students' element={<StudentsView allStudents={allStudents} setAllStudents={setAllStudents} mainStudent={mainStudent} setMainStudent={setMainStudent}/>} />
          <Route path='/classes' element={<ClassesView mainStudent={mainStudent} setMainStudent={setMainStudent}/>} />
          <Route path='/addstudent' element={<AddStudentView setAllStudents={setAllStudents}/>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
