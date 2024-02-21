import "./Nav.css";
function Nav() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="#" className="navbar-link">
          Mashin baz
        </a>
      </div>
      <div className="navbar-list-container">
        <ul className="navbar-list">
          <li className="navbar-item">
            <a className="navbar-link" href="#">
              Fix your ride
            </a>
          </li>
          <li className="navbar-item">
            <a className="navbar-link" href="#">
              Community
            </a>
          </li>
          <li className="navbar-item">
            <a className="navbar-link" href="#">
              Store
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-nav">
        <form className="navbar-search">
          <input
            type="text"
            placeholder="Search..."
            className="navbar-search-input"
          />
        </form>
        <div className="navbar-auth">
          <a className="navbar-link" href="#">
            Join
          </a>
          <div className="navbar-separete"></div>
          <a className="navbar-link" href="#">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
