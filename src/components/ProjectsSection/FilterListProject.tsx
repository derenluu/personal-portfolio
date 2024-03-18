import {FilterListType} from '@/types';
import FilterItemProject from './FilterItemProject';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

const FilterListProject = ({onTabChange, activeTab}: FilterListType) => {
  return (
    <>
      <ul className="filter-list">
        <FilterItemProject
          title="Public"
          status={activeTab === 'Public' ? 'active' : ''}
          onClick={() => onTabChange('Public')}
        />
        <FilterItemProject
          title="Private"
          status={activeTab === 'Private' ? 'active' : ''}
          onClick={() => onTabChange('Private')}
        />
      </ul>
      <div className="filter-select-box">
        <button
          className="filter-select"
          data-select="">
          <div
            className="select-value"
            data-selecct-value="">
            Public
          </div>

          <div className="select-icon">
            <ExpandMoreRoundedIcon />
          </div>
        </button>
        <ul className="select-list">
          <li className="select-item">
            <button data-select-item="">Public</button>
          </li>

          <li className="select-item">
            <button data-select-item="">Private</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FilterListProject;
