import { useEffect, useState } from 'react';
import './App.css';
import Student from './components/students';

function App() {
  const [students,setStudents] = useState([]);
  const [presentStudents,setPresentStudents] = useState([]);
  const [absentStudents,setAbsentStudents] = useState([]);
  const [studentName,setStudentName] = useState("");
  const [editableStudent,setEditableStudent] = useState({});
  
  useEffect(() => {
    setStudentName(editableStudent.name)
  }, [editableStudent])
  

  const setStudentNameFun = (val) => {
    if(val){
      setStudentName(val);
    }
  }

  const addStudent = (e) => {
    e.preventDefault();
    if(studentName){
      if(editableStudent.id){
        const updateStudents = students.map((stu) => {
          if(editableStudent.id === stu.id){
            stu.name = studentName;
            return stu;
          }
          return stu;
        })
        setEditableStudent({});
        setStudents(updateStudents)
      }else{
        setStudents([{id:Date.now(),name:studentName,status: 'all'},...students]);
      }
      setStudentName("");
    }
  }

  const addStatus = (student,status = 'present') => {
    if(student){
      const updateStudents = students.map((stu) => {
        if(student.id === stu.id){
          stu.status = status;
          return stu;
        }
        return stu;
      })
      setStudents(updateStudents)
    }
  }

  const deleteStudent = (student) => {
    if(student){
      const updateStudents = students.filter(stu => stu.id !== student.id);
      setStudents(updateStudents)
    }
  }

  return (
    <div className="App">
      <form onSubmit={addStudent}>
        <input type="text" value={studentName} onChange={(e)=>setStudentNameFun(e.target.value)} />
        <button>Save</button> 
      </form>

      <table>
        <thead>
            <tr>
                <th width="100">name</th>
                <th>action</th>
            </tr>
        </thead>
        <tbody>
            {students.map(stu => (
                <tr key={stu.id}>
                  <td>{stu.name}</td>
                  <td>
                      <div>
                          <button onClick={() => setEditableStudent(stu)}>edit</button>
                          <button onClick={() => deleteStudent(stu)}>delete</button>
                          { stu.status === 'all' && 
                            <>
                              <button onClick={() => addStatus(stu)}>present</button>
                              <button onClick={() => addStatus(stu,'absent')}>absent</button>
                            </>
                          }
                      </div>
                  </td>
              </tr>
            ))}
        </tbody>
    </table>
    <hr/>
    <h4>Present list</h4>
    <Student 
        students={students}
        setEditableStudent={setEditableStudent}
        addStatus={addStatus}
        status = "present"
      ></Student>

    <hr/>
    <h4>Abssent list</h4>
    <Student 
        students={students}
        setEditableStudent={setEditableStudent}
        addStatus={addStatus}
        status = "absent"
      ></Student>

    </div>
  );
}
export default App;