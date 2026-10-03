function NoteList({ notes, deleteNote }) {

    if (!notes || notes.length === 0) {

        return (
            <div className="empty-notes">
                <div className="empty-icon">💡</div>
                <p>Notes you add appear here</p>
            </div>

        );

    }

    return (
        <div className="notes-grid">

            {notes.map((note) => (
                <div className="note-card" key={note.id}>

                    {note.title && <h3>{note.title}</h3>}

                    <p>{note.text}</p>

                    <div className="card-actions">
                        <span>🔔</span>
                        <span>🎨</span>

                        <button

                            className="delete-btn"

                            onClick={() => deleteNote(note.id)}
                        >

                            🗑️
                        </button>
                    </div>
                </div>

            ))}
        </div>

    );

}

export default NoteList;
