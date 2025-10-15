"use client";

import { useNotesStore } from "@/store/noteStore";
import { BiTrash } from "react-icons/bi";

export default function NoteList({ selectedId }: { selectedId: string | null }) {
  const {
    notes,
    searchQuery,
    activeTag,
    setActiveNote,
    deleteNote,
  } = useNotesStore();

  const filteredNotes = notes.filter((note) => {
    const matchesQuery =
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag =
      activeTag === null || note.tags.includes(activeTag);
    return matchesQuery && matchesTag;
  });

  if (filteredNotes.length === 0) {
    return (
      <p className="text-gray-500 text-sm text-center mt-8">
        No notes found.
      </p>
    );
  }

  return (
    <ul className="space-y-2">
      {filteredNotes.map((note) => (
        <li
          key={note.id}
          onClick={() => setActiveNote(note.id)}
          className={`p-3 rounded-lg border border-gray-200 cursor-pointer transition flex justify-between items-center ${
            selectedId === note.id ? "bg-blue-50 border-blue-300" : "hover:bg-gray-100"
          }`}
        >
          <div className="flex-1 overflow-hidden">
            <h3 className="font-medium truncate">{note.title || "Untitled"}</h3>
            <p className="text-gray-500 text-xs truncate">{note.content}</p>
            <div className="flex flex-wrap gap-1 mt-1">
              {note.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              deleteNote(note.id);
            }}
            className="ml-2 text-gray-400 hover:text-red-500"
            title="Delete note"
          >
            <BiTrash size={16} />
          </button>
        </li>
      ))}
    </ul>
  );
}