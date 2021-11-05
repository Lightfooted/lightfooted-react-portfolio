import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <header className="bg-black">
      <div className="container flex justify-between mx-auto">
        <nav>
          <Link to='/' exact className="items-center px-3 py-6 mr-4 text-4xl font-bold tracking-widest text-white poppy inflex-flex hover:text-blue-400">
            Home
          </Link>
          <Link to='/about' className='inline-flex items-center px-3 py-3 my-6 font-semibold text-white poppy hover:text-blue-400'>
            About
          </Link>
          <Link to='/project' className='inline-flex items-center px-3 py-3 my-6 font-semibold text-white poppy hover:text-blue-400'>
            Project
          </Link>
          <Link to='/résumé' className='inline-flex items-center px-3 py-3 my-6 font-semibold text-white poppy hover:text-blue-400'>
            Résumé
          </Link>
          <Link to='/contact' className='inline-flex items-center px-3 py-3 my-6 font-semibold text-white poppy hover:text-blue-00'>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Nav;