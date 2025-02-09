import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar main-navbar w-100 d-flex justify-content-center aligin-items-center">
        <ul className="d-flex justify-content-center align-items-center">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/videos" className="nav-link" >
              Videos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/leaderboard"
              className="nav-link"
              activeClassName="active"
            >
              Leaderboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/challenges"
              className="nav-link"
              activeClassName="active"
            >
              Challenges
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="sub-header d-flex justify-content-between align-items-center px-5 mt-0">
        <h4>Free Stock Photos</h4>
        <div>
          <select className="form-select" name="trending" id="trending">
            <option value="Trending">Trending</option>
            <option value="New">New</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Header;
