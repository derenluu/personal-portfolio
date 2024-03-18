'use client';

import {Data} from '@/data';
import CakeIcon from '@mui/icons-material/Cake';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Image from 'next/image';
import {useState} from 'react';

const socialLinks: {icon: React.ReactNode; href: string}[] = [
  {icon: <GitHubIcon />, href: Data.social.github},
  {icon: <LinkedInIcon />, href: Data.social.linked},
  {icon: <FacebookIcon />, href: Data.social.facebook},
];

const personalInfo: {icon: React.ReactNode; title: string; data: string; method: any}[] = [
  {icon: <LocalPhoneIcon />, title: 'Phone', data: Data.contact.phone, method: `tel:${Data.contact.phone}`},
  {icon: <EmailIcon />, title: 'Email', data: Data.contact.email, method: `mailto:${Data.contact.email}`},
  {icon: <LocationOnIcon />, title: 'Location', data: Data.contact.location, method: '#'},
  {icon: <CakeIcon />, title: 'Birthday', data: Data.contact.birthDay, method: '#'},
];

function SideBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <aside
      className={`sidebar ${sidebarOpen ? 'active' : ''}`}
      data-sidebar="">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <Image
            src={Data.avatar}
            alt={Data.name}
            width={80}
            className="rounded-xl"
          />
        </figure>

        <div className="info-content">
          <h1
            className="name"
            title={Data.name}>
            {Data.name}
          </h1>
{/*           <h1
            className="name"
            title={Data.fullName}>
            {Data.fullName}
          </h1> */}

          <p className="title">{Data.job}</p>
        </div>

        <button
          className="info_more-btn"
          data-sidebar-btn=""
          onClick={toggleSidebar}>
          Show Contacts
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          {personalInfo.map((item, index) => (
            <li
              className="contact-item"
              key={index}>
              <div className="icon-box">{item.icon}</div>

              <div className="contact-info">
                <p className="contact-title">{item.title}</p>
                <a
                  href={item.method}
                  className="contact-link">
                  {item.data}
                </a>
              </div>
            </li>
          ))}
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          {socialLinks.map((item, index) => (
            <li
              className="social-item"
              key={index}>
              <a
                href={item.href}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer">
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default SideBar;
