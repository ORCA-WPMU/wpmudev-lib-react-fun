import React from 'react';
import { getButtonClass } from '../common/Helpers';

const Button = ( props ) => {
    return <button
        className={getButtonClass(props)}
        onClick={props.handleClick}
    >
        { props.children }
    </button>
};


Button.propTypes = {
    shadow: React.PropTypes.bool,
    type: React.PropTypes.string,
    size: React.PropTypes.string,
    handleClick: React.PropTypes.func
};

export default Button;
