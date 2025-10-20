import './App.css'
import Nav from './Nav'
import ScheduleView from './ScheduleView'
import StudentsView from './StudentsView'
import ClassesView from './ClassesView'
import AddStudentView from './AddStudentView'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StudentRow from './StudentRow'

function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<ScheduleView/>} />
          <Route path='/students' element={<StudentsView/>} />
          <Route path='/classes' element={<ClassesView/>} />
          <Route path='/addstudent' element={<AddStudentView/>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
