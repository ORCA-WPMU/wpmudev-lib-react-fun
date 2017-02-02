import React from 'react';


const Tab = ( props ) => {
    return <div className="tab">
        <label onClick={ props.onSelect } htmlFor="">{ props.title }</label>
        <input type="radio" onChange={() => {}} checked={props.active} />
        <div className="content">
            { props.children }
        </div>
    </div>
};

export default Tab;
