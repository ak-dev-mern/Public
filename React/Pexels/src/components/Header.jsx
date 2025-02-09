import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="main-navbar w-100">
        <ul className="d-flex justify-content-center align-items-center">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/videos">Videos</NavLink>
          </li>
          <li>
            <NavLink to="/leaderboard">Leaderboard</NavLink>
          </li>
          <li>
            <NavLink to="/challenges">Challenges</NavLink>
          </li>
        </ul>
      </nav>
      <div className="sub-header d-flex justify-content-between align-items-center px-5 mt-5">
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
