import React from 'react';
import { getButtonClass } from '../common/Helpers';

const LinkButton = ( props ) => {
    return <a
        href={props.to}
        className={getButtonClass(props)}
        onClick={props.handleClick}
    >
        { props.children }
    </a>
};

LinkButton.propTypes = {
    shadow: React.PropTypes.bool,
    type: React.PropTypes.string,
    size: React.PropTypes.string,
    handleClick: React.PropTypes.func
};

export default LinkButton;
