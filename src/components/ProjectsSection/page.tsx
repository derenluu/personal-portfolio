'use client';

import {Data} from '@/data';
import SecurityIcon from '@mui/icons-material/Security';
import PublicIcon from '@mui/icons-material/Public';

export function ProjectsSection() {
  const dataPublicProject = Data.portfolio.Project.Public;
  const dataPrivateProject = Data.portfolio.Project.Private;

  return (
    <>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <PublicIcon />
          </div>
          <h3 className="h3">Public Projects</h3>
        </div>
        {/* <ol className="timeline-list"> */}
        <ol className="timeline-list">
          {Object.entries(dataPublicProject).map(([index, project]) => (
            <li
              className="timeline-item"
              key={index}>
              <h4 className="h4 timeline-item-title">{project.title}</h4>
              <span>
                ➔ Source:{' '}
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{display: 'inline-block', textDecoration: 'none'}}>
                  <span
                    style={{
                      color: 'white', // Màu chữ ban đầu
                      textDecoration: 'underline',
                      transition: 'color 0.3s ease', // Thiết lập hiệu ứng transition
                      cursor: 'pointer', // Optional: Add pointer cursor
                    }}
                    className="hover-underline"
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ffdb70')} // Khi hover vào, thay đổi màu chữ
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}>
                    {' '}
                    Github
                  </span>
                </a>
              </span>
              <p className="timeline-text">
                ➔ Technical: {project.tech.join(', ')}.
                <br />
                ➔ Description: {project.description.join(', ')}.
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <SecurityIcon />
          </div>
          <h3 className="h3">Private Projects</h3>
        </div>
        <ol className="timeline-list">
          {Object.entries(dataPrivateProject).map(([index, project]) => (
            <li
              className="timeline-item"
              key={index}>
              <h4 className="h4 timeline-item-title">{project.title}</h4>
              <span>➔ Source: {project.source}</span>
              <p className="timeline-text">
                ➔ Technical: {project.tech.join(', ')}.
                <br />➔ Description: {project.description.join(', ')}.
              </p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
