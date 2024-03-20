import {Data} from '@/data';

export function SkillsSection() {
  const dataTechSkill = Data.portfolio.Skills.TechSkills;
  const dataSoftSkill = Data.portfolio.Skills.SoftSkills;
  const dataKnowledge = Data.portfolio.Skills.Knowledge;
  const dataLanguage = Data.portfolio.Skills.Language;

  return (
    <>
      <section className="about-text">
        <section className="skill">
          <h3 className="h3 skills-title">Technical Skills</h3>
          <ul className="skills-list content-card">
            {Object.entries(dataTechSkill).map(([category, skills]) => (
              <li
                key={category}
                className="skills-item">
                <div className="title-wrapper">
                  <h5 className="h5 font-bold ">{category}:</h5>
                  <h6 className="">{skills}</h6>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <br></br>

        <section className="skill">
          <h3 className="h3 skills-title">Knowledge</h3>
          <ul className="skills-list content-card">
            {Object.entries(dataKnowledge).map(([category, skills]) => (
              <li
                key={category}
                className="skills-item">
                <div className="title-wrapper">
                  {/* <h5 className="h5 font-bold ">{category}:</h5> */}
                  <h5 className="h5">{skills}</h5>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <br></br>

        <section className="skill">
          <h3 className="h3 skills-title">Soft Skills</h3>
          <ul className="skills-list content-card">
            {Object.entries(dataSoftSkill).map(([category, skills]) => (
              <li
                key={category}
                className="skills-item">
                <div className="title-wrapper">
                  <h5 className="h5">{skills}</h5>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <br></br>

        <section className="skill">
          <h3 className="h3 skills-title">Language</h3>
          <ul className="skills-list content-card">
            {Object.entries(dataLanguage).map(([category, skills]) => (
              <li
                key={category}
                className="skills-item">
                <div className="title-wrapper">
                  <h5 className="h5">{skills}</h5>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </>
  );
}
