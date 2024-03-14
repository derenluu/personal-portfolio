// // import {SideBarType} from '@/types';

// import Image from 'next/image';
// import InfoBox from './InfoBox';

// const socialLinks: {icon: React.ReactNode; href: string}[] = [
//   {icon: <FacebookIcon />, href: Data.social.facebook},
//   {icon: <GitHubIcon />, href: Data.social.github},
//   {icon: <LinkedInIcon />, href: Data.social.linked},
// ];

const personalInfo: {icon: React.ReactNode; title: string; data: string}[] = [
  {icon: <LocalPhoneIcon />, title: 'Phone', data: Data.contact.phone},
  {icon: <EmailIcon />, title: 'Email', data: Data.contact.email},
  {icon: <LocationOnIcon />, title: 'Location', data: Data.contact.location},
  {icon: <CakeIcon />, title: 'Birthday', data: Data.contact.birthDay},
];

// const SideBar = () => {
//   return (
//     <div classNameNameName="h-full inline-block align-middle content-center">
//       <Image
//         src={Data.avatar}
//         alt="My Avatar"
//         width="180"
//         height="100"
//         classNameNameName="mx-auto rounded-[20px]"
//       />
//       <div classNameNameName="text-center">
//         <h3 classNameNameName="mt-4 mb-1 text-3xl ">{Data.name}</h3>
//         <h5 classNameNameName="mb-3 mt-1 text-1xl bg-[#3A3E47] inline-block px-5 py-1.5 rounded-lg">
//           {Data.job}
//         </h5>
//         <div classNameNameName="flex justify-center space-x-3">
//           {socialLinks.map((value, index) => (
//             <a
//               key={index}
//               href={value.href}
//               target="_blank"
//               rel="noopener noreferrer"
//               classNameNameName="hover:bg-zinc-400 duration-300">
//               <span>{value.icon}</span>
//             </a>
//           ))}
//         </div>
//         <div classNameNameName="mt-8 mx-5 border-1 rounded-xl">
//           {personalInfo.map((value, index) => (
//             <InfoBox
//               key={index}
//               icon={value.icon}
//               title={value.title}
//               data={value.data}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
import '@/assets/css/globals.css';
import {Data} from '@/data';
import CakeIcon from '@mui/icons-material/Cake';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Image from 'next/image';

function SideBar() {
  return (
    <aside
      className="sidebar"
      data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <Image
            src={Data.avatar}
            alt={Data.name}
            width="80"
            className="rounded-xl"
          />
        </figure>

        <div className="info-content">
          <h1
            className="name"
            title={Data.name}>
            {Data.name}
          </h1>

          <p className="title">{Data.job}</p>
        </div>

        <button
          className="info_more-btn"
          data-sidebar-btn>
          <span>Show Contacts</span>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <EmailIcon />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a
                href={`mailto:${Data.contact.email}`}
                className="contact-link">
                {Data.contact.email}
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <LocalPhoneIcon />
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a
                href={`tel:${Data.contact.phone}`}
                className="contact-link">
                {Data.contact.phone}
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <CakeIcon />
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time>{Data.contact.birthDay}</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <LocationOnIcon />
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>{Data.contact.location}</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>
        <ul className="social-list">
          <li className="social-item">
            <a
              href="#"
              className="social-link">
              <GitHubIcon />
            </a>
          </li>

          <li className="social-item">
            <a
              href="#"
              className="social-link">
              <LinkedInIcon />
            </a>
          </li>

          <li className="social-item">
            <a
              href="#"
              className="social-link">
              <FacebookIcon />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default SideBar;
