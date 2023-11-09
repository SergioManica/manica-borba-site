// import * as Dialog from '@radix-ui/react-dialog';
import MenuIcon from "./MenuIcon";

function Header() {
  return (
    <header className="container-fluid">
      <div className="logo">
        <div>LOGO</div>
      </div>
      <nav className="navbar-mobile navbar-desktop">
        <button>
          <MenuIcon />
        </button>
      </nav>
    </header>
  );
}

export default Header;
