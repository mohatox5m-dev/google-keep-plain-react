import { useState } from "react";

function NoteInput({ addNote }) {

    const [title, setTitle] = useState("");

    const [text, setText] = useState("");

    const handleAddNote = () => {

        if (!title.trim() && !text.trim()) {

            return;

        }

        addNote(title, text);

        setTitle("");

        setText("");

    };

    return (
        <div className="note-input">
            <input

                className="title-input"

                type="text"

                placeholder="Title"

                value={title}

                onChange={(e) => setTitle(e.target.value)}

            />

            <textarea

                placeholder="Take a note..."

                value={text}

                onChange={(e) => setText(e.target.value)}

            />

            <div className="note-actions">
                <div className="action-icons">
                    <span>🔔</span>
                    <span>👤</span>
                    <span>🎨</span>
                    <span>🖼️</span>
                    <span>⋮</span>
                </div>

                <button onClick={handleAddNote}>Close</button>
            </div>
        </div>

    );

}

export default NoteInput;
