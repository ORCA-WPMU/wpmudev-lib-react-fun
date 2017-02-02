import React, {Component} from 'react';
import { getSelectorSelectedLabel } from '../common/Helpers';

export default class Selector extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            active: false,
            selected: props.selected
        };
    }
    toggle = () => {
        this.setState( { active: ! this.state.active } );
    };

    selectValue = ( value ) => {
        if ( value === this.state.selected ) {
            return;
        }

        this.setState(
            { selected: value },
            () => {
                if ( this.props.handleSelect ) {
                    this.props.handleSelect( this.state.selected );
                }
            }
        );
        this.toggle();

    };

    render() {
        const className = [ 'select-container' ];
        if ( this.state.active ) {
            className.push( 'active' );
        }

        const options = this.props.options.map( ( option ) => {
            return <li
                key={ option.value }
                className={ option.value === this.state.selected ? 'current' : ''}
                onClick={ () => this.selectValue( option.value) }
            >
                { option.label }
            </li>
        });

        return <div className={ className.join( ' ' )} onClick={this.toggle}>
            <span className="dropdown-handle">
                <i className="wdv-icon wdv-icon-reorder" />
            </span>
            <div className="select-list-container">
                <div className="list-value">{ getSelectorSelectedLabel( this.props.options, this.state.selected ) }</div>
                <ul className="list-results">
                    { options }
                </ul>
            </div>
        </div>;
    }
}

Selector.propTypes = {
    options: React.PropTypes.array.isRequired,
    selected: React.PropTypes.string,
    handleSelect: React.PropTypes.func
};
