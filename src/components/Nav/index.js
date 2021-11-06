import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-black">
      <div className="container flex justify-between mx-auto">
        <nav>
          <NavLink to='/lightfooted-react-portfolio' className="items-center px-3 py-6 mr-4 text-4xl font-bold tracking-widest text-white poppy inflex-flex hover:text-blue-400">
            Home
          </NavLink>
          <NavLink to='/about' activeStyle={{ color: "teal"}} className='inline-flex items-center px-3 py-3 my-6 font-semibold text-white poppy hover:text-blue-400'>
            About
          </NavLink>
          <NavLink to='/project' activeStyle={{ color: "teal"}} className='inline-flex items-center px-3 py-3 my-6 font-semibold text-white poppy hover:text-blue-400'>
            Project
          </NavLink>
          <NavLink to='/résumé' activeStyle={{ color: "teal"}} className='inline-flex items-center px-3 py-3 my-6 font-semibold text-white poppy hover:text-blue-400'>
            Résumé
          </NavLink>
          <NavLink to='/contact' activeStyle={{ color: "teal"}} className='inline-flex items-center px-3 py-3 my-6 font-semibold text-white poppy hover:text-blue-400'>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Nav;