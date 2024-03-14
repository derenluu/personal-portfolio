'use client';

// import Link from 'next/link';
// import {usePathname} from 'next/navigation';

// import React from 'react';

// const NavBar = () => {
//   const pathName = usePathname();

//   const menuItems = [
//     {href: '/about', label: 'About me', status: 'active'},
//     {href: '/resume', label: 'Resume', status: ''},
//     {href: '/skills', label: 'Skills', status: ''},
//     {href: '/achievements', label: 'Achievements', status: ''},
//   ];

//   return (
//     <nav className="h-1/6">
//       <div className="p-3 mx-auto">
//         <div className="flex items-center">
//           <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
//             {menuItems.map((item, index) => (
//               <li
//                 key={index}
//                 className={`border-2 rounded-3xl p-2 hover:bg-zinc-400 duration-300 ${
//                   pathName == item.href ? 'active' : ''
//                 }`}>
//                 <Link
//                   href={item.href}
//                   className="rounded-3xl">
//                   {item.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
// import NavBar from '../components/NavBar'
// import Articles from './Articles'
// import * as Sections from './ContentSections'
// import React, { useEffect } from 'react'

function Body() {
  //   useEffect(() => {
  //     import('../assets/js/script.js')
  //   }, [])
  return (
    <div className="main-content">bascunasuiocnuio</div>
    // <div class="main-content">
    //       <nav class="navbar">
    //         <NavBar />
    //       </nav>
    //       <AboutTab />
    //       <ResumeTab />
    //       <SkillsTab />
    //       <AchievementsTab />
    //       <CreditTab />
    //     </div>
    //   )
    // }
    // function AboutTab() {
    //   return (
    //     <Articles
    //       title="About me"
    //       status="active"
    //       sections={Sections.AboutSections()}
    //     />
    //   )
    // }
    // function ResumeTab() {
    //   return (
    //     <Articles title="Résumé" status="" sections={Sections.ResumeSections()} />
    //   )
    // }
    // function SkillsTab() {
    //   return (
    //     <Articles title="Skills" status="" sections={Sections.SkillsSections()} />
    //   )
    // }
    // function AchievementsTab() {
    //   return (
    //     <Articles
    //       title="Achievements"
    //       status=""
    //       sections={Sections.AchievementsSections()}
    //     />
    //   )
    // }
    // function CreditTab() {
    //   return (
    //     <Articles title="Credit" status="" sections={Sections.CreditSections()} />
  );
}
export default Body;
