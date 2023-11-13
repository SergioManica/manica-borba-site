// import * as Dialog from '@radix-ui/react-dialog';
import { List } from "@phosphor-icons/react";


function Header() {
  return (
    <header className="container-fluid">
      <div className="logo">
        <div>LOGO</div>
      </div>
      <nav className="navbar-mobile navbar-desktop">
        <button>
        <List size={56} />
        </button>
      </nav>
    </header>
  );
} 

export default Header;
