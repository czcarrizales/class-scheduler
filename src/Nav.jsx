import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {

    return (
        <>
            <div className='nav-main'>
                <div className='nav-links'>
                    <Link to="/" className='nav-link'>Schedule</Link>
                    <a href="" className='nav-link'>Classes</a>
                    <a href="" className='nav-link'>Students</a>
                </div>
                <div className='nav-offset'>
                    <select name="" id="" className='student-dropdown'>
                        <option value="user">user</option>
                        <option value="user2">user2</option>
                    </select>
                    <button className='add-student'>Add Student</button>
                </div>

            </div>
        </>
    )
}

export default Nav