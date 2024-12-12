import "./Header.css";

function Header({ isLoggedIn, isAdmin, onLogout, onLogin, onNavigate }) {
  return (
    <header className="header">
      <h1 className="header-title">Boogy's Adoption Center</h1>
      <nav className="header-nav">
        <button className="nav-button" onClick={() => onNavigate("home")}>
          Home
        </button>
        {isLoggedIn && !isAdmin && (
          <button className="nav-button" onClick={() => onNavigate("profile")}>
            My Profile
          </button>
        )}
        {isLoggedIn && isAdmin && (
          <button className="nav-button" onClick={() => onNavigate("addCat")}>
            Add Cat
          </button>
        )}
        {isLoggedIn ? (
          <button className="nav-button" onClick={onLogout}>
            Logout
          </button>
        ) : (
          <button className="nav-button" onClick={() => onNavigate("login")}>
            Login
          </button>
        )}
      </nav>
    </header>
  );
}

export default Header;
