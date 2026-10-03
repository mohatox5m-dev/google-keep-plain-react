import Icon from "./Icon";
import NoteCard from "./NoteCard";

function NoteList({ notes, onUpdate, onDelete, darkMode = false }) {
  if (!notes || notes.length === 0) {
    return (
      <div className="empty-notes">
        <Icon name="lightbulb" className="empty-icon" />
        <p>Notes you add appear here</p>
      </div>
    );
  }

  return (
    <div className="notes-grid">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onUpdate={onUpdate}
          onDelete={onDelete}
          darkMode={darkMode}
        />
      ))}
    </div>
  );
}

export default NoteList;
