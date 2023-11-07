import { List } from "@phosphor-icons/react";
// import * as Dialog from '@radix-ui/react-dialog';

function Header() {
  return (
    <div className="container-fluid">
      <div className="logo"><div>LOGO</div></div>
      <nav className="navbar-mobile navbar-desktop">
        <List size={48} />
      </nav>
    </div>
  );
}

export default Header;
