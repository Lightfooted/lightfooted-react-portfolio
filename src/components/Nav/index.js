import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <header>
      <div>
        <nav>
          <Link to='/' exact>
            Home
          </Link>
          <Link to='/about'>
            About
          </Link>
          <Link to='/project'>
            Project
          </Link>
          <Link to='/modules'>
            Modules
          </Link>
          <Link to='/contact'>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Nav;