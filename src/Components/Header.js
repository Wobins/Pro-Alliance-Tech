import PropTypes from 'prop-types';
import Button from './Button';
import { useLocation } from 'react-router-dom';

const Header = ({ title, onAdd, showAdd }) => { 
  const location = useLocation()

  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button 
          color={showAdd ? 'red' : 'green'} 
          text={showAdd ? 'Close' : 'Add'} 
          onClick={onAdd}
        />
      )}
    </header>
  )
}

// Here is to specify the default props
Header.defaultProps = {
  title: "Task Tracker",
}

// Here is to specify the props types 
// expect a warning if not provided right type
Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// CSS in JavaScript
// const headingStyle = {
//   textDecoration: 'underline wavy',
// }

export default Header