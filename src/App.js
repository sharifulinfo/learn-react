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

  return (
    <div className="App">
      <form onSubmit={addNote}>
        <input type="text" value={noteTitle} onChange={chengeNoteTitle} />
        <button type="submit">Save Note</button> 
      </form>
      
      <ul>
        {notes.map((n)=>(
          <li key={n.id}>{n.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
