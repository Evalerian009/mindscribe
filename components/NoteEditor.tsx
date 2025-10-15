"use client";

import { useState } from "react";

export default function NoteEditor() {
  const [content, setContent] = useState("");

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h1 className="text-2xl font-semibold mb-2">New Note</h1>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full h-64 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        placeholder="Start typing..."
      />
    </div>
  );
}