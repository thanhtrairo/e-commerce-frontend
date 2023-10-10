import React from 'react'
import { BsSearch } from 'react-icons/bs'

const SearchBar = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
      }}
    >
      <div className="flex items-center justify-between border border-gray-300 bg-white pr-2">
        <input
          className="w-[100%] border-r-0 border-gray-300 p-2 text-gray-500 focus:outline-none"
          placeholder="Search product, brand"
        />
        <button type="submit">
          <BsSearch className="text-xl text-gray-500 hover:text-gray-950" />
        </button>
      </div>
    </form>
  )
}

export default SearchBar
