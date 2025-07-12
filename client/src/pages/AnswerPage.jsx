import React, { useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import { dummyQuestions,dummyAnswers } from "../../db/sampleData";
import { useParams } from "react-router-dom";


const AnswerPage = () => {
  const { id } = useParams();
  const dummyQuestion = dummyQuestions[id];
  const [answers, setAnswers] = useState(dummyAnswers);
  const [newAnswer, setNewAnswer] = useState("");

  const handleVote = (id, delta) => {
    setAnswers((prev) =>
      prev.map((a) =>
        a.id === id ? { ...a, votes: a.votes + delta } : a
      )
    );
  };

  const handleSubmit = () => {
    if (!newAnswer.trim()) return;
    const newEntry = {
      id: Date.now(),
      content: newAnswer,
      votes: 0,
    };
    setAnswers([newEntry, ...answers]);
    setNewAnswer("");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
      {/* Question Section */}
      <div className="bg-white p-6 rounded-xl shadow-md border">
        <h1 className="text-2xl font-semibold text-[#3f3f3f] mb-2">
          {dummyQuestion.title}
        </h1>
        <p className="text-gray-700 mb-4">{dummyQuestion.snippet}</p>
        <div className="flex flex-wrap gap-2">
          {dummyQuestion.tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Answer Submission */}
      <div className="bg-white p-6 rounded-xl shadow-md border">
        <h2 className="text-lg font-semibold mb-2 text-[#3f3f3f]">
          Your Answer
        </h2>
        <textarea
          rows={4}
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
          placeholder="Write your answer here..."
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          onClick={handleSubmit}
          className="mt-3 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
        >
          Post Answer
        </button>
      </div>

      {/* Answers List */}
      <div className="space-y-4">
        {answers.map((answer) => (
          <div
            key={answer.id}
            className="bg-white p-4 rounded-xl shadow-sm border flex gap-4"
          >
            {/* Voting Section */}
            <div className="flex flex-col items-center text-gray-500">
              <button onClick={() => handleVote(answer.id, 1)} className="hover:text-purple-600">
                <ArrowUp size={20} />
              </button>
              <span className="font-semibold text-sm">{answer.votes}</span>
              <button onClick={() => handleVote(answer.id, -1)} className="hover:text-purple-600">
                <ArrowDown size={20} />
              </button>
            </div>

            {/* Answer Content */}
            <div className="flex-1 text-gray-700 text-sm">{answer.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnswerPage;
