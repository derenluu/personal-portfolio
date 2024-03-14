import '@/assets/css/globals.css';
import { NavItemType } from '@/types';

function NavItem({title, status = ''}: NavItemType) {
  return (
    <li className="navbar-item">
      <button
        className={`navbar-link ${status}`}>
        {title}
      </button>
    </li>
  );
}

export default NavItem;
