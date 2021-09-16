import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <ul className="header-list">
          <Link to="/" className="header-list-item">
            <li>
              <b>Home</b>
            </li>
          </Link>
          <Link to="/add" className="header-list-item">
            <li>
              <b>Nova tarefa</b>
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
