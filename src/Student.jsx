import React, { useState } from 'react'; 
import './App.css'; 
function Student() { 
const [students, setStudents] = useState([]); 
const [name, setName] = useState(''); 
const [grade, setGrade] = useState(''); 
const [editIndex, setEditIndex] = useState(null); 

const handleAddOrUpdateStudent = (e) => { 
e.preventDefault(); 
  if(editIndex !== null){
    const updateStudents = [...students];
    updateStudents[editIndex] = {name,grade};
    setStudents(updateStudents);
    setEditIndex(null);

  }else{
    setStudents([...students,{name,grade}]);

  }
  setName("");
  setGrade("")
}; 
const handleEdit = (index) => { 

    setName(students[index].name) ;
    setGrade(students[index].grade);
    setEditIndex(index);

    }

const handleDelete = (index) => { 
     setStudents(students.filter((_, i)=> i !== index));
}; 

return ( 
<div className="App"> 
<h1>Student Grades Management</h1> 
<form onSubmit={handleAddOrUpdateStudent}> 
<input 
          type="text" 
          placeholder="Student Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        /> 
<input 
          type="text" 
          placeholder="Grade" 
          value={grade} 
          onChange={(e) => setGrade(e.target.value)} 
        /> 
<button type="submit">{editIndex !== null ? 'Update' : 'Add'} Student</button> 
</form> 
<table> 
<thead> 
<tr> 
<th>Name</th> 
<th>Grade</th> 
<th>Actions</th> 
</tr> 
</thead> 
<tbody> 
          {students.map((student, index) => ( 
<tr key={index}> 
<td>{student.name}</td> 
<td>{student.grade}</td> 
<td> 
<button onClick={() => handleEdit(index)}>Edit</button> 
<button onClick={() => handleDelete(index)}>Delete</button> 
</td> 
</tr> 
          ))} 
</tbody> 
</table> 
</div> 
  ); 
}

export default Student;