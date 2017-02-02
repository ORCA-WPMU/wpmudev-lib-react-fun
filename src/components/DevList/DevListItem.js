import React from 'react';

const DevListItem = ( props ) => {
    return <li>
        <div>
            <span className="list-label">{props.label}</span>
            <span className="list-detail">{props.detail}</span>
        </div>
    </li>
};

export default DevListItem;