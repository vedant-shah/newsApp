import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          NewsApp
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <div className="nav-link active" aria-current="page">
              Top Headlines
            </div>

            <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><div class="dropdown-item" onClick={toggleCategory()}>Business</div></li>
            <li><div class="dropdown-item" onClick={toggleCategory()}>Entertainment</div></li>
            <li><div class="dropdown-item" onClick={toggleCategory()}>Science</div></li>
            <li><div class="dropdown-item" onClick={toggleCategory()}>Sports</div></li>
            <li><div class="dropdown-item" onClick={toggleCategory()}>Health</div></li>
          </ul>
        </li>
            
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
