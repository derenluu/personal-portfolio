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
          title="Resume"
          status={activeTab === 'Resume' ? 'active' : ''}
          onClick={() => onTabChange('Resume')}
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
        {/* <NavItem
          title="Achievements"
          status={activeTab === 'Achievements' ? 'active' : ''}
          onClick={() => onTabChange('Achievements')}
        /> */}
      </ul>
    </nav>
  );
};

export default NavBar;
