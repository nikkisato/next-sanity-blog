import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faBorderAll,  faSortNumericDown, faSortNumericUp } from '@fortawesome/free-solid-svg-icons'

const LIST_VIEW_ICONS = ['list', 'border-all'];

const FilteringMenu = ({ onChange, filter}) => {
return (
    <div className="filtering-menu mb-2">
        <FontAwesomeIcon
            className="clickable hoverable mr-3"
            size="2x"
            icon={filter?.view?.list ? faBorderAll : faList }
            onClick={() =>
                onChange('view', {list: +!filter?.view?.list })
            } 
        />
        <FontAwesomeIcon
            className="clickable hoverable"
            size="2x"
            icon={filter?.date?.asc ? faSortNumericUp : faSortNumericDown }
            onClick={() =>
                onChange('date', {asc: +!filter?.date?.asc })
            } 
        />
    </div>
)
}

export default FilteringMenu