import '@/assets/css/globals.css';
import {ArticlesProjectType} from '@/types';

function ArticlesProject({title, status, sections}: ArticlesProjectType) {
  return (
    <article
      className={`porfolio ${status}`}
      data-page={title}>
      <header>
        <h2 className="h2 article-title">{title}</h2>
      </header>
      {sections}
    </article>
  );
}

export default ArticlesProject;
