import {FilterItemType} from '@/types';

function FilterItemProject({title, status = '', onClick}: FilterItemType) {
  return (
    <li className="filter-item">
      <button
        className={`${status}`}
        data-nav-link=""
        onClick={onClick} // Call the onClick function when the button is clicked
      >
        {title}
      </button>
    </li>
  );
}

export default FilterItemProject;
