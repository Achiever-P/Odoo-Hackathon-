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
];