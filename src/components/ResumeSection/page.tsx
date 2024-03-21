import {Data} from '@/data';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

export function ResumeSection() {
  const dataExperiences = Data.portfolio.Resume.Experience;
  const dataActivities = Data.portfolio.Resume.Activities;
  const dataCertificates = Data.portfolio.Resume.Certificates;

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
            <BusinessCenterRoundedIcon />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          {dataExperiences.map((experience, index) => (
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

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <DirectionsRunIcon />
          </div>
          <h3 className="h3">Activities</h3>
        </div>
        <ol className="timeline-list">
          {Object.entries(dataActivities).map(([index, activities]) => (
            <li
              key={index}
              className="timeline-item">
              <h4 className="timeline-text">{activities}</h4>
            </li>
          ))}
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <WorkspacePremiumIcon />
          </div>
          <h3 className="h3">Certificates</h3>
        </div>
        <ol className="timeline-list">
          {Object.entries(dataCertificates).map(([index, certificates]) => (
            <li
              key={index}
              className="timeline-item">
              <h4 className="timeline-text">{certificates}</h4>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
