inputfilter
===========

Filter for HTML input controls.

Examples:

    // can write only english symbols and numeric
    $('.only-english-num').inputfilter('english+numeric');

    // can write only english symbols
    $('.only-english').inputfilter('english');

    // can write only numeric
    $('.only-num').inputfilter('numeric');

    // regexp: numbers and spaces
    $('.only-num').inputfilter(/^[\d\s]+$/i);