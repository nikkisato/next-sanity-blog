import Toggle from 'react-toggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, } from '@fortawesome/free-solid-svg-icons';

const ThemeToggle = ({ onChange }) =>
  <label>
    <Toggle
      className="day-night-toggle"
      icons={{
        checked: <FontAwesomeIcon inverse icon={faSun}/>,
        unchecked: <FontAwesomeIcon inverse icon={faMoon} />,
      }}
      onChange={onChange} />
  </label>

export default ThemeToggle;