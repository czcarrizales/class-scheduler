import React, {useState} from "react"


function StudentsView()
{
const [students, setStudents] = useState ([
    {id: 1, name: "Ibrahim Alhumaidi", studentID: "1234", email: "Alhumaid@csub.edu"},
    {id: 2, name: "Chazz carrizales", studentID: "1235", email: "Carrizales@csub.edu"},
    {id: 3, name: "Oscar Rocha", studentID: "1236", email: "Rocha@csub.edu"}
]);

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
