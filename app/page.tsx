import Sidebar from "@/components/Sidebar";
import NoteEditor from "@/components/NoteEditor";

export default function HomePage() {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <section className="flex-1 p-6 overflow-y-auto">
        <NoteEditor />
      </section>
    </main>
  );
}