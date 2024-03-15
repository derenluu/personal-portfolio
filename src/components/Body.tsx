'use client';

import {useState} from 'react';
import Articles from './Articles';
import NavBar from './NavBar';
import {AboutSection} from './Sections/AboutSection';
import {ResumeSection} from './Sections/ResumeSection';
import {SkillsSection} from './Sections/SkillsSection';
import {AchievementsSection} from './Sections/AchievementsSection';

function Body() {
  const [activeTab, setActiveTab] = useState('About');

  // declare variable types
  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div className="main-content">
      <NavBar
        onTabChange={handleTabChange}
        activeTab={activeTab}
      />
      {activeTab === 'About' && <AboutTab />}
      {activeTab === 'Resume' && <ResumeTab />}
      {activeTab === 'Skills' && <SkillsTab />}
      {activeTab === 'Achievements' && <AchievementsTab />}
    </div>
  );
}

function AboutTab() {
  return (
    <Articles
      title="About me"
      status="active"
      sections={<AboutSection />}
    />
  );
}

function ResumeTab() {
  return (
    <Articles
      title="Resume"
      status="active"
      sections={<ResumeSection />}
    />
  );
}

function SkillsTab() {
  return (
    <Articles
      title="Skills"
      status="active"
      sections={<SkillsSection />}
    />
  );
}

function AchievementsTab() {
  return (
    <Articles
      title="Achievements"
      status="active"
      sections={<AchievementsSection />}
    />
  );
}

export default Body;
