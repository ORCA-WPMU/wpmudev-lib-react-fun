import React from 'react';

const DevBox = ( props ) => {
    return <div className="dev-box">
        <div className="box-title">
            <h3>{props.title}</h3>
            { props.buttons ? props.buttons : null }
        </div>
        <div className="box-content">
            {props.children}
        </div>
        <div className="box-footer">
            {props.footer}
        </div>
    </div>
};


DevBox.propTypes = {
    buttons: React.PropTypes.array,
    footer: React.PropTypes.any,
    title: React.PropTypes.string,
};

export default DevBox;