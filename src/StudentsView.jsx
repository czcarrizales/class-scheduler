import React, {useState} from "react"


function StudentsView()
{
const [students, setStudents] = useState ([
    {id: 1, name: "Ibrahim Alhumaidi", studentID: "1234", email: "Alhumaid@csub.edu"},
    {id: 2, name: "Chazz carrizales", studentID: "1235", email: "Carrizales@csub.edu"},
    {id: 3, name: "Oscar Rocha", studentID: "1236", email: "Rocha@csub.edu"}
]);

const [name, setName]  = useState("");
const [studentID, setStudenID] = useState("");
const [email, setEmail] = useState("");

function Add(e)
{
    // prevents page from reloading
    e.preventDefault();
    if (!name.trim()) return;

    const newStudent = 
    {
        id: Date.now(),
        name: name.trim(),
        studentID: studentID.trim() || "-",
        email: email.trim() || "-"
    };
    setStudents((prev) => [newStudent, ...prev]);
    setName("");
    setStudenID("");
    setEmail("");
}


function Delete(id)
{
// deletes student when id number is given
setStudents((prev) => prev.filter((s) => s.id != id));
}

  return  (
    <>
    <h1>
        Student View 
    </h1>

    <form onSubmit = {Add} style = {{marginBottom: "1rem"}}>
        <input
        placeholder = "Name"
        value = {name}
        onChange = {(e) => setName(e.target.value)}
        />
        <input
        placeholder = "Student ID"
        value = {studentID}
        onChange = {(e) => setStudenID(e.target.value)}
        />
        <input
        placeholder = "Email"
        value = {email}
        onChange = {(e) => setemail(e.target.value)}
        />
        <button type = "submit">Add Studnet</button>

    </form>

<ul>
    {students.map ((s) => (
        <li key = {s.id}>
            {s.name} - {s.studnetID} - {s.email}{" "}
            <button onClick = {() => delete(s.id)} >Delete</button>
        </li>
    ))}
</ul>
    </>
  );
}
export default StudentsView
