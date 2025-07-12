export const dummyQuestions = [
  {
    id: 1,
    title: "How to integrate React with Flask backend?",
    snippet: "I've been trying to connect my React frontend with a Flask backend and facing CORS issues...",
    votes: 12,
    answers: 3,
    tags: ["react", "flask", "api"],
  },
  {
    id: 2,
    title: "What's the best way to manage state in large React apps?",
    snippet: "I've used Context API and Redux Toolkit, but I want to know what others prefer and why...",
    votes: 7,
    answers: 5,
    tags: ["react", "redux", "state-management"],
  },
  {
    id: 3,
    title: "How to optimize performance in React apps?",
    snippet: "My React app is getting slow with many components. What are some tips to improve performance?",
    votes: 9,
    answers: 4,
    tags: ["react", "performance", "optimization"],
  },
  {
    id: 4,
    title: "How to deploy a full-stack app using Flask and React?",
    snippet: "I’ve completed a full-stack project using Flask and React. What’s the best way to deploy it?",
    votes: 15,
    answers: 6,
    tags: ["deployment", "flask", "react", "full-stack"],
  },
  {
    id: 5,
    title: "Why is useEffect running twice in React 18?",
    snippet: "After upgrading to React 18, I noticed useEffect runs twice on mount. Is this a bug or feature?",
    votes: 11,
    answers: 2,
    tags: ["react", "react-hooks", "useEffect", "react18"],
  },
];

export const dummyAnswers = [
  {
    questionID: 1,
    content:
      "You need to use the `flask-cors` package on the backend. Install it and wrap your Flask app with CORS.",
    votes: 5,
  },
  {
    questionID: 2,
    content:
      "Also make sure you’re sending requests to the correct port and using the right headers in fetch.",
    votes: 2,
  },
  {
    questionID: 3,
    content:
      "Use `React.memo` for pure components and `useCallback` for functions passed to child components.",
    votes: 6,
  },
  {
    questionID: 3,
    content:
      "Consider using `React.lazy` and `Suspense` for code splitting to reduce initial load time.",
    votes: 4,
  },
  {
    questionID: 4,
    content:
      "You can deploy the Flask API on Render or Railway, and the React frontend on Vercel or Netlify.",
    votes: 7,
  },
  {
    questionID: 4,
    content:
      "Another option is to build the React app and serve it via Flask’s static folder. It works well for small projects.",
    votes: 3,
  },
  {
    questionID: 5,
    content:
      "This is due to React 18’s Strict Mode double-invoking lifecycle methods to help catch bugs early.",
    votes: 8,
  },
  {
    questionID: 5,
    content:
      "It only happens in development mode. In production, useEffect won’t run twice.",
    votes: 5,
  },
];
