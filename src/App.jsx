import { useEffect, useState } from "react";

import "./App.css";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SideButton from "./components/SideButton";
import AsideBar from "./components/AsideBar";
import Main from "./components/Main";
import NoteInput from "./components/NoteInput";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState(() => {
    try {
      const savedNotes = localStorage.getItem("keepNotes");
      return savedNotes ? JSON.parse(savedNotes) : [];
    } catch (error) {
      console.log("Could not load notes:", error);
      return [];
    }
  });

  const [search, setSearch] = useState("");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    try {
      return localStorage.getItem("keepDarkMode") === "true";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    localStorage.setItem("keepNotes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
    try {
      localStorage.setItem("keepDarkMode", String(darkMode));
    } catch {
      /* ignore */
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const addNote = (title, text, color = "default") => {
    const newNote = {
      id: Date.now(),
      title: title || "",
      text: text || "",
      color: color || "default",
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
  };

  const updateNote = (id, updates) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, ...updates } : note
      )
    );
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const filteredNotes = notes.filter((note) => {
    const searchText = search.toLowerCase();
    const noteTitle = note.title || "";
    const noteText = note.text || "";
    return (
      noteTitle.toLowerCase().includes(searchText) ||
      noteText.toLowerCase().includes(searchText)
    );
  });

  const toggleSidebar = () => {
    setSidebarCollapsed((prev) => !prev);
  };

  return (
    <div className="app">
      <nav className="navbar">
        <Header onMenuClick={toggleSidebar} />
        <SearchBar search={search} setSearch={setSearch} />
        <SideButton darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
      </nav>

      <div className="app-body">
        <AsideBar collapsed={sidebarCollapsed} />
        <Main sidebarCollapsed={sidebarCollapsed}>
          <NoteInput addNote={addNote} darkMode={darkMode} />
          <NoteList
            notes={filteredNotes}
            onUpdate={updateNote}
            onDelete={deleteNote}
            darkMode={darkMode}
          />
        </Main>
      </div>
    </div>
  );
}

export default App;
