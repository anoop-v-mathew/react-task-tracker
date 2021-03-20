import PropTypes from 'prop-types'

const Button = ({name, color}) => {
    return (
        <button 
            style={{backgroundColor: color}} 
            className="btn" >
            {name}
        </button>    
    )
}

Button.propTypes = {
    name: PropTypes.string,
    color: PropTypes.string,
}

export default Button
