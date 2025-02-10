import React, { useState } from "react";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  const addNote = () => {
    const noteValue = parseFloat(newNote);
    if (noteValue >= 0 && noteValue <= 20) {
      setNotes([...notes, noteValue]);
      setNewNote("");
    } else {
      alert("Veuillez entrer une note entre 0 et 20.");
    }
  };

  const removeNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  const calculateAverage = () => {
    if (notes.length === 0) return 0;
    const sum = notes.reduce((acc, note) => acc + note, 0);
    return (sum / notes.length).toFixed(2);
  };

  return (
    <div>
      <h2>Gestionnaire de Notes</h2>
      <input
        type="number"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        placeholder="Ajouter une note"
      />
      <button onClick={addNote}>Ajouter</button>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            {note} <button onClick={() => removeNote(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <h3>Moyenne: {calculateAverage()}</h3>
    </div>
  );
};

export default Notes;
