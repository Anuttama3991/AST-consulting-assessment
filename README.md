# हिंदुस्तान लाइव - Hindi News Portal

A modern, responsive Hindi news portal built with Next.js 15, TypeScript, and Tailwind CSS. This project demonstrates a clone of LiveHindustan website with professional UI/UX and best practices.

![Preview](./preview.png)

🔗 **Live Demo:** [fantastic-bavarois-b05c5c.netlify.app](https://fantastic-bavarois-b05c5c.netlify.app)

---

## ✨ Features

### 🚀 Core Functionality
- **ISR (Incremental Static Regeneration)** - Pages revalidate every 2 minutes for fresh content
- **Dynamic Routing** - Individual news pages (`/news/[slug]`) and section pages (`/section/[slug]`)
- **Real-time Search** - Full-text search across all articles
- **Breaking News Ticker** - Animated ticker for urgent news

### 📱 User Experience
- **Mobile-First Design** - Responsive layouts for all screen sizes
- **Smooth Animations** - Slide-down menus, fade effects, hover states
- **Hindi Language Support** - Proper `lang="hi"` and Hindi typography

### 🔍 SEO & Performance
- **Meta Tags** - Dynamic OpenGraph and Twitter cards
- **Structured Data** - JSON-LD for news articles
- **Next.js Image** - Automatic optimization and lazy loading
- **Static Generation** - Pre-rendered pages for fast loading

---

## 🛠️ Technology Stack

| Tech | Purpose |
|------|---------|
| **Next.js 15** | React framework with App Router |
| **TypeScript** | Type-safe development |
| **Tailwind CSS v4** | Utility-first styling |
| **ISR** | Data fetching strategy |

---

## 📦 Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd livehindustan-news

# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
src/
├── app/                      # Next.js App Router
│   ├── news/[slug]/          # Dynamic news article pages
│   ├── section/[slug]/       # Category/section pages  
│   ├── search/               # Search functionality
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Homepage
├── components/               # React components
│   ├── Navbar.tsx            # Navigation header
│   ├── SiteFooter.tsx        # Footer
│   ├── ArticleCard.tsx       # News card component
│   ├── BreakingTicker.tsx    # Breaking news ticker
│   ├── FeaturedStory.tsx     # Hero section
│   ├── NewsSection.tsx       # Section container
│   ├── SideWidget.tsx        # Sidebar widgets
│   ├── Spinner.tsx           # Loading spinner
│   └── ErrorDisplay.tsx      # Error state
├── data/
│   └── news.ts               # Mock articles & helper functions
├── lib/
│   └── helpers.ts            # Utility functions
└── types/
    └── index.ts              # TypeScript interfaces
```

---

## 🧪 Testing

This project includes comprehensive Jest unit tests with React Testing Library.

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Test Coverage

| Category | Tests | Description |
|----------|-------|-------------|
| **Data Functions** | 19 | Mock data filtering, search, helpers |
| **Utility Functions** | 14 | Date formatting, text truncation |
| **Components** | 10 | ArticleCard rendering, variants, accessibility |
| **Total** | **43** | All tests passing ✅ |

---

## 🧪 Edge Cases Handled

| Scenario | Solution |
|----------|----------|
| Missing image | Gradient placeholder with icon |
| Long headlines | CSS line-clamp truncation |
| Empty section | "No articles" message display |
| Invalid route | Custom 404 pages |
| Search no results | Friendly empty state |

---

## 🎨 Design Highlights

- **Red theme** - Professional gradient matching LiveHindustan from `red-600` to `red-700`
- **Card-based layout** - Rounded corners, shadows, hover effects
- **Breaking news** - Red pulse animation for urgent stories
- **Typography** - Optimized for Hindi readability

---

## 📝 License

MIT License - See LICENSE file

---

## 👤 Author

Built with ❤️ using Next.js and Tailwind CSS
