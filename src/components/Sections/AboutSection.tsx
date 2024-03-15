import {Data} from '@/data';

export function AboutSection() {
  return (
    <>
      <section className="about-text">
        <p>{Data.portfolio.About_Me}</p>
      </section>
    </>
  );
}
