import "./Nav.css";


function Nav() {
  return (
    <nav>
      <div className="nav-container">
        <input 
          type="text" 
          className="search-input" 
          placeholder="Enter your search shoes.">
        </input>
      </div>
    </nav>
  )
}

export default Nav;
