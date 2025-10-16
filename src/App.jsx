import './App.css'
import Nav from './Nav'
import ScheduleView from './ScheduleView'
import ClassesView from './ClassesView'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<ScheduleView/>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
