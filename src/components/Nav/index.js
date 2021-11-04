import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <header className="bg-black">
      <div className="container flex justify-between mx-auto">
        <nav>
          <Link to='/' exact className="items-center px-3 py-6 mr-4 text-4xl font-bold tracking-widest text-white inflex-flex hover:text-blue-500">
            Home
          </Link>
          <Link to='/about' className='inline-flex items-center px-3 py-3 my-6 font-semibold text-white hover:text-blue-500'>
            About
          </Link>
          <Link to='/project' className='inline-flex items-center px-3 py-3 my-6 font-semibold text-white hover:text-blue-500'>
            Project
          </Link>
          <Link to='/modules' className='inline-flex items-center px-3 py-3 my-6 font-semibold text-white hover:text-blue-500'>
            Modules
          </Link>
          <Link to='/contact' className='inline-flex items-center px-3 py-3 my-6 font-semibold text-white hover:text-blue-500'>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Nav;