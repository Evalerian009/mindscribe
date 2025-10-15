import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Note = {
  id: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: number;
  updatedAt: number;
};

type NotesState = {
  notes: Note[];
  activeNoteId: string | null;
  searchQuery: string;
  activeTag: string | null;
  addNote: () => void;
  updateNote: (id: string, data: Partial<Note>) => void;
  deleteNote: (id: string) => void;
  addTagToNote: (id: string, tag: string) => void;
  removeTagFromNote: (id: string, tag: string) => void;
  setActiveNote: (id: string | null) => void;
  setSearchQuery: (query: string) => void;
  setActiveTag: (tag: string | null) => void;
};

export const useNotesStore = create<NotesState>()(
  persist(
    (set, get) => ({
      notes: [],
      activeNoteId: null,
      searchQuery: "",
      activeTag: null,

      addNote: () => {
        const newNote: Note = {
          id: crypto.randomUUID(),
          title: "Untitled",
          content: "",
          tags: [],
          createdAt: Date.now(),
          updatedAt: Date.now(),
        };
        set((state) => ({
          notes: [newNote, ...state.notes],
          activeNoteId: newNote.id,
        }));
      },

      updateNote: (id, data) =>
        set((state) => ({
          notes: state.notes.map((n) =>
            n.id === id ? { ...n, ...data, updatedAt: Date.now() } : n
          ),
        })),

      deleteNote: (id) =>
        set((state) => {
          const remaining = state.notes.filter((n) => n.id !== id);
          const isActiveDeleted = state.activeNoteId === id;
          return {
            notes: remaining,
            activeNoteId: isActiveDeleted
              ? remaining[0]?.id || null
              : state.activeNoteId,
          };
        }),

      addTagToNote: (id, tag) =>
        set((state) => ({
          notes: state.notes.map((n) =>
            n.id === id && !n.tags.includes(tag)
              ? { ...n, tags: [...n.tags, tag] }
              : n
          ),
        })),

      removeTagFromNote: (id, tag) =>
        set((state) => ({
          notes: state.notes.map((n) =>
            n.id === id
              ? { ...n, tags: n.tags.filter((t) => t !== tag) }
              : n
          ),
        })),

      setActiveNote: (id) => set({ activeNoteId: id }),
      setSearchQuery: (query) => set({ searchQuery: query }),
      setActiveTag: (tag) => set({ activeTag: tag }),
    }),
    { name: "mindscribe-notes" }
  )
);