import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  var showSidenavDropdownContent = false;

  const showSidenav = () => {
    document.getElementById("Header-sidenav").classList.replace("Header-close-sidenav", "Header-show-sidenav");
  };

  const closeSidenav = () => {
    document.getElementById("Header-sidenav").classList.replace("Header-show-sidenav", "Header-close-sidenav");
  };

  const toggleSidenavDropdownContent = () => {
    const sidenavDropdownContent = document.getElementById("Header-sidenav-dropdown-content");
    if (showSidenavDropdownContent) {
      sidenavDropdownContent.classList.replace("Header-sidenav-show-dropdown-content", "Header-sidenav-close-dropdown-content");
      showSidenavDropdownContent = false;
    } else {
      sidenavDropdownContent.classList.replace("Header-sidenav-close-dropdown-content", "Header-sidenav-show-dropdown-content");
      showSidenavDropdownContent = true;
    }
  };

  return (
    <div className="Header">
      <div className="d-flex justify-content-between">
        <div className="Header-heading">
          <h1 className="fs-2 px-2">Restaurant</h1>
        </div>
        <div className="Header-navbar">
          <div className="Header-navbar-item">
            <Link className="Header-navbar-link text-decoration-none text-dark px-2">Home</Link>
          </div>
          <div className="Header-navbar-item">
            <Link className="Header-navbar-link text-decoration-none text-dark px-2">Menu</Link>
          </div>
          <div className="Header-navbar-item">
            <Link className="Header-navbar-link text-decoration-none text-dark px-2">Reservation</Link>
          </div>
          <div className="Header-navbar-item">
            <Link className="Header-navbar-link text-decoration-none text-dark px-2">Reviews</Link>
          </div>
          <div className="Header-navbar-item">
            <Link className="Header-navbar-link text-decoration-none text-dark px-2">About</Link>
          </div>
          <div className="Header-navbar-item">
            <Link className="Header-navbar-link text-decoration-none text-dark px-2">Contact</Link>
          </div>
          <div className="Header-navbar-item Header-dropdown-item position-relative">
            <Link className="Header-navbar-link text-decoration-none text-dark px-2"><i className="bi bi-person-circle"></i></Link>
            <div className="Header-dropdown-content">
              <div className="Header-dropdown-item">
                <Link className="Header-dropdown-link text-nowrap text-decoration-none text-dark">Sign Up</Link>
              </div>
              <div className="Header-dropdown-item">
                <Link className="Header-dropdown-link text-nowrap text-decoration-none text-dark">Sign In</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="Header-sidenav-button-container">
          <div className="d-flex w-100 h-100 justify-content-center align-items-center">
            <button className="Header-sidenav-button" onClick={showSidenav}>
              <i className="bi bi-list"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="Header-sidenav Header-close-sidenav" id="Header-sidenav">
        <span className="Header-sidenav-close-button" onClick={closeSidenav}><i className="bi bi-arrow-right-square"></i></span>
        <div className="Header-sidenav-item mt-5">
          <Link className="Header-sidenav-link text-decoration-none text-dark">Home</Link>
        </div>
        <div className="Header-sidenav-item">
          <Link className="Header-sidenav-link text-decoration-none text-dark">Menu</Link>
        </div>
        <div className="Header-sidenav-item">
          <Link className="Header-sidenav-link text-decoration-none text-dark">Reservation</Link>
        </div>
        <div className="Header-sidenav-item">
          <Link className="Header-sidenav-link text-decoration-none text-dark">Reviews</Link>
        </div>
        <div className="Header-sidenav-item">
          <Link className="Header-sidenav-link text-decoration-none text-dark">About</Link>
        </div>
        <div className="Header-sidenav-item">
          <Link className="Header-sidenav-link text-decoration-none text-dark">Contact</Link>
        </div>
        <div className="Header-sidenav-item Header-sidenav-dropdown-item">
          <Link className="Header-sidenav-link text-decoration-none text-dark" onClick={toggleSidenavDropdownContent} ><i className="bi bi-person-circle"></i></Link>
          <div className="Header-sidenav-dropdown-content Header-sidenav-close-dropdown-content" id="Header-sidenav-dropdown-content">
            <div className="Header-sidenav-item">
              <Link className="Header-sidenav-dropdown-link text-decoration-none text-dark">Sign Up</Link>
            </div>
            <div className="Header-sidenav-item">
              <Link className="Header-sidenav-dropdown-link text-decoration-none text-dark">Sign In</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;