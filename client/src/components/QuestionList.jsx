import React from "react";
import QuestionCard from "./QuestionCard";

const QuestionList = ({ questions }) => {
  if (!questions || questions.length === 0) {
    return <p className="text-center text-gray-500 mt-4">No questions yet.</p>;
  }

  return (
    <div className="space-y-4">
      {questions.map((q, index) => (
        <QuestionCard
          key={index}
          title={q.title}
          snippet={q.snippet}
          votes={q.votes}
          answers={q.answers}
          tags={q.tags}
        />
      ))}
    </div>
  );
};

export default QuestionList;
