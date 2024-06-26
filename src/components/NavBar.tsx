import {NavBarType} from '@/types';
import NavItem from './NavItem';

const NavBar = ({onTabChange, activeTab}: NavBarType) => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <NavItem
          title="About"
          status={activeTab === 'About' ? 'active' : ''}
          onClick={() => onTabChange('About')}
        />
        <NavItem
          title="Résumé"
          status={activeTab === 'Résumé' ? 'active' : ''}
          onClick={() => onTabChange('Résumé')}
        />
        <NavItem
          title="Skills"
          status={activeTab === 'Skills' ? 'active' : ''}
          onClick={() => onTabChange('Skills')}
        />
        <NavItem
          title="Projects"
          status={activeTab === 'Projects' ? 'active' : ''}
          onClick={() => onTabChange('Projects')}
        />
      </ul>
    </nav>
  );
};

export default NavBar;
