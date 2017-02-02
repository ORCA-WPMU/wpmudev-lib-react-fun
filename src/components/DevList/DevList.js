import React from 'react';
import DevListItem from './DevListItem';

const DevList = ( props ) => {
    const rows = props.rows.map( ( row, key ) => {
        return <DevListItem
            key={key}
            label={row.label}
            detail={row.detail}
        />
    });

    return <ul className="dev-list">
        <li className="list-header">
            <div>
                <span className="list-label">{props.headers.label}</span>
                <span className="list-detail">{props.headers.detail}</span>
            </div>
        </li>
        {rows}
    </ul>
};

DevList.propTypes = {
    rows: React.PropTypes.array.isRequired,
    headers: React.PropTypes.object.isRequired
};

export default DevList;
