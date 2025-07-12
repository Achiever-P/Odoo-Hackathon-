import React from "react";
import { ArrowUp, ArrowDown, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";


const QuestionCard = ({ id, title, snippet, votes, answers, tags }) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center" 
    onClick={()=>navigate(`/question/${id}`)}>
      <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100 hover:shadow-lg transition flex gap-4 w-[1100px]">
        {/* Voting Section */}
        <div className="flex flex-col items-center text-gray-500">
          <button className="hover:text-purple-600">
            <ArrowUp size={20} />
          </button>
          <span className="font-semibold text-sm">{votes}</span>
          <button className="hover:text-purple-600">
            <ArrowDown size={20} />
          </button>
        </div>
        {/* Content Section */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-[#3f3f3f] mb-1">{title}</h2>
          <p className="text-gray-600 text-sm line-clamp-3 mb-2">{snippet}</p>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-2">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
          {/* Answer count */}
          <div className="flex items-center text-gray-500 text-sm">
            <MessageCircle size={16} className="mr-1" />
            {answers} Answer{answers !== 1 ? "s" : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
