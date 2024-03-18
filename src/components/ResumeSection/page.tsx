import {Data} from '@/data';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';

export function ResumeSection() {
  const experiences = Data.portfolio.Resume.Experience;

  return (
    <>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <AutoStoriesOutlinedIcon />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">{Data.portfolio.Resume.Education.school}</h4>
            <span>2018 — 2021</span>
            <p className="timeline-text">{Data.portfolio.Resume.Education.description}</p>
          </li>
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <AutoStoriesOutlinedIcon />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          {/* <li className="timeline-item">
              <h4 className="h4 timeline-item-title">{experience.title}</h4>
              <span>2018 — 2021</span>
              <p className="timeline-text"></p>
            </li> */}
          {experiences.map((experience, index) => (
            <li
              className="timeline-item"
              key={index}>
              <h4 className="h4 timeline-item-title">{experience.title}</h4>
              <span>{experience.time}</span>
              <p className="timeline-text">{experience.description}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
