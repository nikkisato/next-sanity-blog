import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faBorderAll } from '@fortawesome/free-solid-svg-icons'

const LIST_VIEW_ICONS = ['list', 'border-all'];

const FilteringMenu = ({ onChange, filter}) => {
return (
    <div className="filtering-menu mb-2">
        <FontAwesomeIcon
            className="clickable hoverable"
            size="2x"
            icon={filter?.view?.list ? faBorderAll : faList }
            onClick={() =>
                onChange('view', {list: +!filter?.view?.list })
            } 
        />
    </div>
)
}

export default FilteringMenu