import { useState } from 'react';
import './App.css';

function App() {
  
  const [noteTitle,setNoteTitle] = useState("");
  const [editedNoteId,setEditedNoteId] = useState(null);
  const [notes,setNotes] = useState([]);

  const addNote = (e) => {
    e.preventDefault();
    if(noteTitle.trim() === ""){
      return alert("please enver valid note");
    }
    if(editedNoteId){
      let updatedItem = notes.map(item => {
        if(item.id === editedNoteId){
          return {...item,title:noteTitle}
        }
        return item;
      }
    );
    setNotes(updatedItem)
      console.log(updatedItem);
    }else{
      const n = {
        id : Date.now(),
        title : noteTitle
      }
      setNotes([n,...notes]);
      
    }
    setNoteTitle("");
  }

  const chengeNoteTitle = (e) => {
    setNoteTitle(e.target.value);
  }

  const deleteNote = (noteId) => {
    const updateNotes = notes.filter((item)=>item.id !== noteId);
    setNotes(updateNotes);
  }

  const editNote = (note) => {
    setEditedNoteId(note.id);
    setNoteTitle(note.title);
  }

  return (
    <div className="App">
      <form onSubmit={addNote}>
        <input type="text" value={noteTitle} onChange={chengeNoteTitle} />
        <button type="submit">{editedNoteId ? 'Update Note' : 'Save Note'}</button> 
      </form>
      
      <ul>
        {notes.map((n)=>(
          <li key={n.id}>
            {/* <span>id:{n.id}</span> */}
            <span>{n.title}</span>
            <button onClick={()=>editNote(n)}>Edit</button>
            <button onClick={()=>deleteNote(n.id)}>Delete</button>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
