import React from 'react';
import Tab from './Tab';

export default class Tabs extends React.Component {
    constructor( props ) {
        super( props );

        this.state = {
            active: props.active ? props.active : 0
        }
    }

    handleSelectTab = ( tab ) => {
        this.setState( { active: tab } );
    };

    render() {
        const tabs = this.props.tabs.map( ( tab, key ) =>
            <Tab key={key} title={ tab.title } active={ key === this.state.active } onSelect={ () => this.handleSelectTab( key ) }>{ tab.content }</Tab>
        );

        const ClassName = this.props.mode === 'vertical' ? 'vertical-tabs' : 'tabs';

        return <div className={ClassName}>
            { tabs }
        </div>
    }
}

Tabs.propTypes = {
    tabs: React.PropTypes.array.isRequired,
};