import '@/assets/css/globals.css';
import {ArticlesType} from '@/types';

function Articles({title, status, sections}: ArticlesType) {
  return (
    <article
      className={`${title} ${status}`}
      data-page={title}>
      <header>
        <h2 className="h2 article-title">{title}</h2>
      </header>
      {sections}
    </article>
  );
}

export default Articles;
