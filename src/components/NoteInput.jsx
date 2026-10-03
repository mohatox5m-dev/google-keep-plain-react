import { useCallback, useEffect, useRef, useState } from "react";

import ColorPicker from "./ColorPicker";
import Icon from "./Icon";
import { getNoteColorStyle } from "../constants/noteColors";

function NoteInput({ addNote, darkMode = false }) {
  const [expanded, setExpanded] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [color, setColor] = useState("default");
  const [showColors, setShowColors] = useState(false);
  const containerRef = useRef(null);

  const handleClose = useCallback(() => {
    if (title.trim() || text.trim()) {
      addNote(title, text, color);
    }
    setTitle("");
    setText("");
    setColor("default");
    setShowColors(false);
    setExpanded(false);
  }, [addNote, color, text, title]);

  useEffect(() => {
    if (!expanded) return undefined;

    const handlePointerDown = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [expanded, handleClose]);

  const style = getNoteColorStyle(color, darkMode);

  if (!expanded) {
    return (
      <div
        className="note-input note-input-collapsed"
        onClick={() => setExpanded(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setExpanded(true);
          }
        }}
        role="button"
        tabIndex={0}
      >
        <span className="collapsed-placeholder">Take a note...</span>
        <div className="collapsed-icons">
          <button
            type="button"
            className="icon-btn"
            title="New list"
            onClick={(e) => e.stopPropagation()}
          >
            <Icon name="check_box" />
          </button>
          <button
            type="button"
            className="icon-btn"
            title="New note with drawing"
            onClick={(e) => e.stopPropagation()}
          >
            <Icon name="brush" />
          </button>
          <button
            type="button"
            className="icon-btn"
            title="New note with image"
            onClick={(e) => e.stopPropagation()}
          >
            <Icon name="image" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="note-input note-input-expanded"
      style={style}
    >
      <input
        className="title-input"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        autoFocus
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
                value={color}
                onChange={setColor}
                onClose={() => setShowColors(false)}
              />
            )}
          </div>
          <button type="button" className="icon-btn" title="Image">
            <Icon name="image" />
          </button>
          <button type="button" className="icon-btn" title="Archive">
            <Icon name="archive" />
          </button>
          <button type="button" className="icon-btn" title="More">
            <Icon name="more_vert" />
          </button>
        </div>
        <button type="button" className="close-btn" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default NoteInput;
