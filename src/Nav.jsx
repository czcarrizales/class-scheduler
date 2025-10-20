import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {

    return (
        <>
            <div className='nav-main'>
                <div className='nav-links'>
                    <Link to="/" className='nav-link'>Schedule</Link>
                    <Link to="classes" className='nav-link'>Classes</Link>
                    <Link to="students" className='nav-link'>Students</Link>
                </div>
                <div className='nav-offset'>
                    <select name="" id="" className='student-dropdown'>
                        <option value="user">user</option>
                        <option value="user2">user2</option>
                    </select>
                    <Link to="addstudent" className='add-student'>Add Student</Link>
                </div>

            </div>
        </>
    )
}

export default Nav