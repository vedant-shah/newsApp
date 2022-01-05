import React, { useState } from "react";

function Navbar(props) {

  const [head, setHead] = useState(props.head);
  function toggleCategory(category) {
    props.category(category);
    setHead(category.substring(10));
    props.useCountry('&country=in')
    props.topic('');
  }

  function toggleTopic() {
    let topic = document.getElementById('searchBox').value;
    if (topic != '') {
      props.topic(topic);
      props.category('&category=');
      props.useCountry('');
      setHead(topic);
      document.getElementById('searchBox').value = '';
    }
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-brand" onClick={() => { props.category('&category='); setHead("Top Headlines"); props.useCountry('&country=in'); props.topic(''); }}>
          NewsApp
        </div>
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
        <div className="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <div className="nav-link active" aria-current="page">
              {head}
            </div>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categories
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><div className="dropdown-item" onClick={() => toggleCategory('&category=Business')}>Business</div></li>
                <li><div className="dropdown-item" onClick={() => toggleCategory('&category=Entertainment')}>Entertainment</div></li>
                <li><div className="dropdown-item" onClick={() => toggleCategory('&category=Science')}>Science</div></li>
                <li><div className="dropdown-item" onClick={() => toggleCategory('&category=Sports')}>Sports</div></li>
                <li><div className="dropdown-item" onClick={() => toggleCategory('&category=Health')}>Health</div></li>
              </ul>
            </li>
          </div>
            <form className="d-flex justifly-content-end">
              <input className="form-control me-2" id="searchBox" type="search" placeholder="Search for Topics" aria-label="Search"/>
            <button className="btn btn-outline-success" type="button" onClick={() => {toggleTopic()}}>Search</button>
            </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
