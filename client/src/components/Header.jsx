import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom' 
// import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import { Search } from 'lucide-react'

const Header = () => {

  const { setInput, input } = useAppContext()
  const inputRef = useRef()
  const navigate = useNavigate() 

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setInput(inputRef.current.value)
  }

  const onClear = () => {
    setInput("")
    inputRef.current.value = ""
  }

  const handleAskQuestion = () => {
    navigate('/AskQuestion') 
  }

  return (
    <div className="mx-8 sm:mx-16 xl:mx-24 relative">
      <div className="flex mt-10">
        {/* Search Bar */}
        <form
          onSubmit={onSubmitHandler}
          className="flex flex-1 items-center border border-gray-300 bg-white rounded-full overflow-hidden shadow-sm">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search questions..."
            required
            className="w-full px-4 py-3 outline-none"
          />
          <button
            type="submit"
            className="bg-primary text-white px-4 py-3 rounded-full hover:scale-105 transition-all">
            <Search size={20} />
          </button>
        </form>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-5 mb-15">

        {/* Ask New Question Button */}
        <button
          onClick={handleAskQuestion}
          className="flex-1 bg-primary text-white px-6 py-3 rounded-full hover:scale-105 transition-all shadow-md"
        >
          Ask New Question
        </button>

        {/* Filter Dropdown */}
        <select
          className="flex-1 border border-gray-300 rounded-full px-4 py-3 text-gray-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="newest">Newest Answers</option>
          <option value="most-upvoted">Most Upvoted Answers</option>
          <option value="oldest">Oldest Answers</option>
          <option value="most-downvoted">Most Downvoted Answers</option>
        </select>

      </div>

      {/* Clear Search Button */}
      {input && (
        <div className="mt-4 text-center">
          <button
            onClick={onClear}
            className="border text-sm font-medium px-3 py-1 rounded shadow-sm hover:bg-gray-50"
          >
            Clear Search
          </button>
        </div>
      )}

    </div>
  )
}

export default Header

