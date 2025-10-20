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

  const [mainStudent, setMainStudent] = useState({})
  const [allStudents, setAllStudents] = useState([])

  useEffect(() => {
    Class.seed()
    console.log(Class.list())
    setAllStudents(Student.list())
  }, [])

  useEffect(() => {
    console.log('this is the main student')
    console.log(mainStudent)
  }, [mainStudent])

  useEffect(() => {
    console.log('students list has changed!')
  }, [allStudents])

  return (
    <>
      <BrowserRouter>
        <Nav mainStudent={mainStudent} setMainStudent={setMainStudent} allStudents={allStudents} />
        <Routes>
          <Route path='/' element={<ScheduleView mainStudent={mainStudent}/>} />
          <Route path='/students' element={<StudentsView allStudents={allStudents} setAllStudents={setAllStudents}/>} />
          <Route path='/classes' element={<ClassesView mainStudent={mainStudent} setMainStudent={setMainStudent}/>} />
          <Route path='/addstudent' element={<AddStudentView setAllStudents={setAllStudents}/>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
