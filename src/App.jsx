import './App.css'
import Nav from './Nav'
import ScheduleView from './ScheduleView'
import StudentsView from './StudentsView'
import ClassesView from './ClassesView'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StudentRow from './StudentRow'

function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<ScheduleView/>} />
          <Route path='/' element={<StudentsView/>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
