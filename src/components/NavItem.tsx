import {NavItemType} from '@/types';

function NavItem({title, status = '', onClick}: NavItemType) {
  return (
    <li className="navbar-item">
      <button
        className={`navbar-link ${status}`}
        data-nav-link=""
        onClick={onClick} // Call the onClick function when the button is clicked
      >
        {title}
      </button>
    </li>
  );
}

export default NavItem;
