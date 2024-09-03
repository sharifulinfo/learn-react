import { useState } from 'react';
import './App.css';

function App() {
  
  const [noteTitle,setNoteTitle] = useState("");
  const [notes,setNotes] = useState([]);

  const addNote = (e) => {
    e.preventDefault();
    if(noteTitle.trim() === ""){
      return alert("please enver valid note");
    }
    const n = {
      id : Date.now(),
      title : noteTitle
    }
    setNotes([n,...notes]);
    console.log(notes);
  }

  const chengeNoteTitle = (e) => {
    setNoteTitle(e.target.value);
  }

  const deleteNote = (noteId) => {
    const updateNotes = notes.filter((item)=>item.id !== noteId);
    setNotes(updateNotes);
  }

  return (
    <div className="App">
      <form onSubmit={addNote}>
        <input type="text" value={noteTitle} onChange={chengeNoteTitle} />
        <button type="submit">Save Note</button> 
      </form>
      
      <ul>
        {notes.map((n)=>(
          <li key={n.id}>
            {/* <span>id:{n.id}</span> */}
            <span>{n.title}</span>
            <button>Edit</button>
            <button onClick={()=>deleteNote(n.id)}>Delete</button>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
