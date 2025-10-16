import './StudentRow.css'
function StudentRow() {
    return (
        <div className='student-row-main'>
            <p>Avery Smith</p>
            <p>109240</p>
            <p>avery@example.com</p>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}

export default StudentRow