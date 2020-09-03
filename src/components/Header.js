import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'
//you only get to have one default export so whenever you import something that is not the default export, you need the curly braces

const Header = (props) => {
  return (
    <header>
      <h1>ANDREW'S MUSIC EMPORIUM</h1>
      <nav className="nav-list">
        <ul>
          <Link to = "/">
            <li>Home</li>
          </Link>

          <Link to = "/about">
            <li>About</li>
          </Link>

          <Link to = "/albums">
            <li>Albums</li>
          </Link>

        </ul>
      </nav>
    </header>
  )
}
export default Header
