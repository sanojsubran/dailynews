## daily news

**daily news** is a frontend web app that aggregates technical news from multiple sources into a single, clean interface. It fetches live data from a backend API and displays stories from Hacker News, TechCrunch, and Slashdot in a paginated, three-column layout.

![screenshot](/blob/screenshot.png)

### Features

- Three-column feed layout — Hacker News, TechCrunch, and Slashdot side by side
- Paginated browsing within each feed (Previous / Next controls)
- Live data fetched from the backend API on load
- Responsive layout that stacks to a single column on smaller screens

### Getting Started

**Prerequisites:** Node.js 20+

```bash
npm install
```

**Run locally:**

```bash
REACT_APP_BACKEND_API="<your-backend-url>" npm start
```

App will be available at http://localhost:5173/

**Build for production:**

```bash
npm run build
```

Output is written to the `dist/` directory.

### Configuration

| Variable | Description |
|---|---|
| `REACT_APP_BACKEND_API` | URL of the iago backend API |
