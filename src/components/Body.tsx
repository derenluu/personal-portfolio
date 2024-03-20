'use client';

import {useState} from 'react';
import Articles from './Articles';
import NavBar from './NavBar';
import {AboutSection} from './AboutSection/page';
import {ResumeSection} from './ResumeSection/page';
import {SkillsSection} from './SkillsSection/page';
import {ProjectsSection} from './ProjectsSection/page';
import {AchievementsSection} from './AchievementsSection/page';
function Body() {
  const [activeTab, setActiveTab] = useState('About');

  // declare variable types
  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <div className="main-content">
        <NavBar
          onTabChange={handleTabChange}
          activeTab={activeTab}
        />
        {activeTab === 'About' && <AboutTab />}
        {activeTab === 'Resume' && <ResumeTab />}
        {activeTab === 'Skills' && <SkillsTab />}
        {activeTab === 'Projects' && <ProjectsTab />}
        {activeTab === 'Achievements' && <AchievementsTab />}
      </div>
    </>
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
function ProjectsTab() {
  return (
    <Articles
      title="Projects"
      status="active"
      sections={<ProjectsSection />}
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
