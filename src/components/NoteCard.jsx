import { useCallback, useEffect, useRef, useState } from "react";

import ColorPicker from "./ColorPicker";
import Icon from "./Icon";
import { getNoteColorStyle } from "../constants/noteColors";

function NoteCard({ note, onUpdate, onDelete, darkMode = false }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [text, setText] = useState(note.text);
  const [showColors, setShowColors] = useState(false);
  const cardRef = useRef(null);

  const saveAndClose = useCallback(() => {
    if (!title.trim() && !text.trim()) {
      onDelete(note.id);
    } else {
      onUpdate(note.id, { title: title.trim(), text: text.trim() });
    }
    setEditing(false);
    setShowColors(false);
  }, [title, text, note.id, onDelete, onUpdate]);

  useEffect(() => {
    if (!editing) return undefined;

    const handlePointerDown = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        saveAndClose();
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [editing, saveAndClose]);

  const openEditor = (withColors = false) => {
    setTitle(note.title);
    setText(note.text);
    setEditing(true);
    setShowColors(withColors);
  };

  const style = getNoteColorStyle(note.color, darkMode);

  if (editing) {
    return (
      <div
        ref={cardRef}
        className="note-card note-card-editing"
        style={style}
      >
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
            <button type="button" className="icon-btn" title="Remind me">
              <Icon name="notifications_none" />
            </button>
            <button type="button" className="icon-btn" title="Collaborator">
              <Icon name="person_add" />
            </button>
            <div className="color-picker-wrap">
              <button
                type="button"
                className="icon-btn"
                title="Change color"
                onClick={() => setShowColors((v) => !v)}
              >
                <Icon name="palette" />
              </button>
              {showColors && (
                <ColorPicker
                  value={note.color || "default"}
                  onChange={(colorId) => onUpdate(note.id, { color: colorId })}
                  onClose={() => setShowColors(false)}
                />
              )}
            </div>
            <button type="button" className="icon-btn" title="Image">
              <Icon name="image" />
            </button>
            <button type="button" className="icon-btn" title="More">
              <Icon name="more_vert" />
            </button>
          </div>
          <button type="button" className="close-btn" onClick={saveAndClose}>
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="note-card"
      style={style}
      onClick={() => openEditor(false)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openEditor(false);
        }
      }}
      role="button"
      tabIndex={0}
    >
      {note.title && <h3>{note.title}</h3>}
      {note.text && <p>{note.text}</p>}

      <div className="card-actions">
        <button
          type="button"
          className="icon-btn"
          title="Remind me"
          onClick={(e) => e.stopPropagation()}
        >
          <Icon name="notifications_none" />
        </button>
        <button
          type="button"
          className="icon-btn"
          title="Change color"
          onClick={(e) => {
            e.stopPropagation();
            openEditor(true);
          }}
        >
          <Icon name="palette" />
        </button>
        <button
          type="button"
          className="icon-btn delete-btn"
          title="Delete note"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(note.id);
          }}
        >
          <Icon name="delete" />
        </button>
      </div>
    </div>
  );
}

export default NoteCard;
