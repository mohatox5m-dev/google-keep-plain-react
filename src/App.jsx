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

  useEffect(() => {

    localStorage.setItem("keepNotes", JSON.stringify(notes));

  }, [notes]);

  const addNote = (title, text) => {

    const newNote = {

      id: Date.now(),

      title: title || "",

      text: text || "",

    };

    setNotes((prevNotes) => [newNote, ...prevNotes]);

  };

  const deleteNote = (id) => {

    setNotes((prevNotes) =>

      prevNotes.filter((note) => note.id !== id)

    );

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

  return (
    <div className="app">
      <nav className="navbar">
        <Header />

        <SearchBar

          search={search}

          setSearch={setSearch}

        />

        <SideButton />
      </nav>

      <div className="app-body">
        <AsideBar />

        <Main>
          <NoteInput addNote={addNote} />

          <NoteList

            notes={filteredNotes}

            deleteNote={deleteNote}

          />
        </Main>
      </div>
    </div>

  );

}

export default App;
