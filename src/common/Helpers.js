export const getButtonClass = ( args ) => {
    let className = [ 'button' ];
    if ( args.type ) {
        className.push( 'button-' + args.type );
    }

    if ( args.size ) {
        className.push( 'button-' + args.size );
    }

    if ( args.shadow ) {
        className.push( 'button-cta' );
    }
    return className.join( ' ' );
};

export const getSelectorSelectedLabel = ( options, selectedValue ) => {
    let found = false;
    options.map( ( option )  => found = option.value === selectedValue ? option.label : found );
    if ( ! found ) {
        // Get the first element
        return options[0].label;
    }
    return found;
};
