"use client";

import { useNotesStore } from "@/store/noteStore";
import NoteList from "./NoteList";

export default function Sidebar() {
  const { setSearchQuery, addNote, activeNoteId, notes, activeTag, setActiveTag } =
    useNotesStore();

  // collect unique tags
  const allTags = Array.from(new Set(notes.flatMap((n) => n.tags)));

  return (
    <aside className="w-72 bg-white border-r p-4 flex flex-col">
      <h2 className="font-semibold text-lg mb-4">MindScribe</h2>

      <input
        type="text"
        placeholder="Search notes..."
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border border-gray-300 rounded-lg p-2 mb-4 text-sm w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />

      <button
        onClick={addNote}
        className="bg-blue-600 text-white text-sm py-2 rounded-lg hover:bg-blue-700 transition mb-4"
      >
        + New Note
      </button>

      {/* Tag filters */}
      {allTags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={() => setActiveTag(null)}
            className={`px-3 py-1 text-xs rounded-full border ${
              activeTag === null
                ? "bg-blue-600 text-white"
                : "border-gray-300 text-gray-600 hover:bg-gray-100"
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() =>
                setActiveTag(activeTag === tag ? null : tag)
              }
              className={`px-3 py-1 text-xs rounded-full border ${
                activeTag === tag
                  ? "bg-blue-600 text-white"
                  : "border-gray-300 text-gray-600 hover:bg-gray-100"
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>
      )}

      <div className="flex-1 overflow-y-auto">
        <NoteList selectedId={activeNoteId} />
      </div>
    </aside>
  );
}