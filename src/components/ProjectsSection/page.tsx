'use client';

// import {useState} from 'react';
// import {Data} from '@/data';
// import ArticlesProject from './ArticlesProject';
// import PrivateProject from './TypeProject/PrivateProject';
// import PublicProject from './TypeProject/PublicProject';
// import FilterListProject from './FilterListProject';

export function ProjectsSection() {
  //   const [activeTab, setActiveTab] = useState('Public');

  //   // declare variable types
  //   const handleTabChange = (tabName: string) => {
  //     setActiveTab(tabName);
  //   };

  return (
    <>
      <section className="project">
        {/* <p>{Data.portfolio.Achievements.Activities}</p> */}
        <p>Projects</p>
      </section>
    </>

    // // <>
    //   {/* <section className="project"> */}
    //   {/* Projects */}
    //   {/* <FilterListProject
    //       onTabChange={handleTabChange}
    //       activeTab={activeTab}
    //     />
    //     {activeTab === 'Public' && <PublicTab />}
    //     {activeTab === 'Private' && <PrivateTab />} */}
    //   {/* </section> */}
    // // </>
  );
}

// function PublicTab() {
//   return (
//     <ArticlesProject
//       title="Public"
//       status="active"
//       sections={<PublicProject />}
//     />
//   );
// }

// function PrivateTab() {
//   return (
//     <ArticlesProject
//       title="Private"
//       status="active"
//       sections={<PrivateProject />}
//     />
//   );
// }
