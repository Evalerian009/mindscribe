"use client";

import { useNotesStore } from "@/store/noteStore";
import { useState } from "react";
import { BiX } from "react-icons/bi";

export default function NoteEditor() {
  const {
    notes,
    activeNoteId,
    updateNote,
    addTagToNote,
    removeTagFromNote,
  } = useNotesStore();
  const activeNote = notes.find((n) => n.id === activeNoteId);
  const [tagInput, setTagInput] = useState("");

  if (!activeNote) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500">
        Select or create a note to start editing.
      </div>
    );
  }

  const handleAddTag = () => {
    const newTag = tagInput.trim().toLowerCase();
    if (newTag && !activeNote.tags.includes(newTag)) {
      addTagToNote(activeNote.id, newTag);
      setTagInput("");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 h-full flex flex-col">
      <input
        className="text-2xl font-semibold mb-2 border-none focus:outline-none"
        value={activeNote.title}
        onChange={(e) => updateNote(activeNote.id, { title: e.target.value })}
        placeholder="Note title..."
      />
      <textarea
        className="flex-1 w-full border-none focus:outline-none resize-none p-1 text-sm"
        value={activeNote.content}
        onChange={(e) =>
          updateNote(activeNote.id, { content: e.target.value })
        }
        placeholder="Start typing..."
      />

      {/* Tags Section */}
      <div className="mt-4">
        <div className="flex flex-wrap gap-2 mb-2">
          {activeNote.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs flex items-center gap-1"
            >
              #{tag}
              <button
                onClick={() => removeTagFromNote(activeNote.id, tag)}
                className="hover:text-red-500"
              >
                <BiX size={12} />
              </button>
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAddTag()}
            placeholder="Add tag..."
            className="border border-gray-300 rounded-lg px-2 py-1 text-sm flex-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button
            onClick={handleAddTag}
            className="bg-blue-600 text-white text-xs px-3 py-1 rounded-lg hover:bg-blue-700"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}