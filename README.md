# 🧠 MindScribe — AI-Assisted Notes & To-Do App (Next.js + OpenAI)

> ✍️ **MindScribe** helps you think clearly and write smarter — an AI-powered notes app built with **Next.js 14**, **TailwindCSS**, and **OpenAI API**.  
> Capture ideas, organize them effortlessly, and let AI summarize, rephrase, or expand your thoughts.

---

## 🌟 Overview

**MindScribe** blends productivity with intelligence.  
It’s a personal note-taking and idea-refinement tool where users can write, tag, search, and interact with AI — all through a clean, modern interface.

Built to demonstrate:
- Real-world **AI integration** with OpenAI’s GPT models.  
- Clean **Next.js architecture** using the App Router.  
- Professional-grade **UI/UX** suitable for a portfolio project.

---

## 🧩 Features

| Category | Description |
|-----------|--------------|
| 📝 Notes | Create, edit, delete, and auto-save notes |
| 🏷️ Tagging | Organize notes by tags and categories |
| 🔍 Search | Real-time note search and filtering |
| 🤖 AI Tools | Summarize, rephrase, or expand notes using OpenAI |
| 💾 Persistence | LocalStorage or Firebase sync |
| 🌗 Design | Responsive, minimalist Tailwind UI |
| 🔐 Authentication *(optional)* | Firebase or Clerk integration |

---

## 🧰 Tech Stack

| Layer | Technology |
|-------|-------------|
| Framework | **Next.js 14 (App Router)** |
| Styling | **TailwindCSS** |
| State Management | **Zustand** |
| AI | **OpenAI API (GPT-4 / GPT-3.5)** |
| Database *(optional)* | Firebase / Supabase |
| Deployment | **Vercel** |

---

## 🗂️ Folder Structure
mindscribe/
├── public/
│ ├── favicon.ico
│ └── icons/
│ └── mindscribe.svg
│
├── app/
│ ├── layout.jsx # Root layout (global UI, providers)
│ ├── page.jsx # Main dashboard
│ ├── settings/
│ │ └── page.jsx # Settings page (API key, preferences)
│ ├── about/
│ │ └── page.jsx # Optional About page
│ └── api/
│ ├── summarize/route.js # Summarize note endpoint
│ ├── rephrase/route.js # Rephrase note endpoint
│ └── expand/route.js # Expand note endpoint
│
├── components/
│ ├── NoteCard.jsx # Displays single note
│ ├── NoteEditor.jsx # Create/edit interface
│ ├── Sidebar.jsx # Tags, filters, search
│ ├── AIToolbar.jsx # AI actions toolbar
│ └── Loader.jsx # Reusable loading spinner
│
├── store/
│ └── notesStore.js # Zustand store
│
├── lib/
│ └── openai.js # Shared OpenAI API helper
│
├── utils/
│ ├── storage.js # LocalStorage helpers
│ └── format.js # Text/date formatting
│
├── hooks/
│ └── useAIAction.js # Custom hook for AI requests
│
├── styles/
│ └── globals.css # Tailwind styles
│
├── .env.local
├── .env.example
├── .gitignore
├── next.config.js
├── postcss.config.js
├── tailwind.config.js
├── package.json
└── README.md


---

## ⚙️ Environment Variables

Create a `.env.local` file in your project root:

> ⚠️ Never commit `.env.local`. Use `.env.example` to document required keys.

---

## 🪜 Development Roadmap

### 🧱 Phase 1: Setup & UI
- [ ] Create project with `npx create-next-app@latest mindscribe`
- [ ] Configure TailwindCSS and base layout
- [ ] Build Sidebar, Notes List, and Editor UI

### ⚙️ Phase 2: Core Functionality
- [ ] Integrate Zustand for state management
- [ ] Implement create/edit/delete notes
- [ ] Add LocalStorage persistence
- [ ] Add tagging and search filters

### 🤖 Phase 3: AI Integration
- [ ] Create `/api/summarize`, `/api/rephrase`, `/api/expand` routes
- [ ] Implement shared OpenAI helper in `lib/openai.js`
- [ ] Add AI Toolbar actions (summarize, rephrase, expand)
- [ ] Display AI responses inline or in modal

### 🎨 Phase 4: UI Polish & UX
- [ ] Add Framer Motion animations
- [ ] Add loading indicators and toasts
- [ ] Add dark/light mode toggle
- [ ] Make responsive for mobile

### 🧩 Phase 5: Optional Enhancements
- [ ] Integrate Firebase or Supabase for cloud storage
- [ ] Add Clerk or Firebase Auth
- [ ] Add user API key management in settings
- [ ] Deploy to **Vercel**

---

# 1. Clone the repository
git clone https://github.com/<your-username>/mindscribe.git

# 2. Navigate into the project
cd mindscribe

# 3. Install dependencies
npm install

# 4. Add your OpenAI API key
echo "OPENAI_API_KEY=your_api_key_here" > .env.local

# 5. Start the development server
npm run dev

Then visit http://localhost:3000


# 🌐 Deployment (Vercel)
- Push your code to GitHub.
- Go to Vercel
- Import your GitHub repo.
- Add OPENAI_API_KEY to your Vercel environment variables.
- Deploy!

# 🧭 Future Ideas
- 🗒️ Markdown editor
- 🎤 Voice-to-text note creation
- 🧠 AI-generated tag suggestions
- 🌓 Dark/light theme toggle
- 📤 Export as Markdown or PDF

# 🌐 Deployment (Vercel)
- Push your code to GitHub.
- Go to Vercel
- Import your GitHub repo.
- Add OPENAI_API_KEY to your Vercel environment variables.
- Deploy!


🧑‍💻 Author
Valerian
(Links)

📜 License
Licensed under the MIT License — free to use, modify, and distribute.