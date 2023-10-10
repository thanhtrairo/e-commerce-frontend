'use client'

import React from 'react'
import { AiOutlineUser, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import Link from 'next/link'

import SearchBar from './SearchBar'

const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-[999] flex w-[100%] items-center bg-white px-4 py-4 shadow-md sm:px-12 lg:px-20">
      <div className="basis-1/6">
        <h1 className="text-xl font-extrabold">My.Shop</h1>
      </div>
      <div className="basis-3/6">
        <SearchBar />
      </div>
      <div className="basis-2/6">
        <div className="flex items-center justify-end">
          <Link href="#" className="relative">
            <AiOutlineShoppingCart className="iconHeader" />
            <span className="absolute -right-1/4 -top-1/4 h-4 w-4 rounded-full bg-slate-950 text-center text-sm leading-4 text-white">
              0
            </span>
          </Link>
          <Link href="#">
            <AiOutlineHeart className="iconHeader" />
          </Link>
          <Link href="#">
            <AiOutlineUser className="iconHeader" />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
