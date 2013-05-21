/*
 * jquery.inputfilter.js
 *
 * Author: Kuznetsov Aleksey (crusat@crusat.ru)
 * Github: https://github.com/crusat/inputfilter
 *
 * License: GPL (http://www.opensource.org/licenses/gpl-license.php).
 *
 * Version 0.1
 *
 */

(function($) {
    function keyEvent(that, expression, evnt) {
        if (((evnt.keyCode >= 48) && (evnt.keyCode <= 90))||($(that).data('inputfilter-old-value')!=$(that).val())) {
            if ($(that).val()==''||expression.test($(that).val())) {
                $(that).data('inputfilter-old-value', $(that).val());
            } else {
                $(that).val($(that).data('inputfilter-old-value'));
            }
        }
    }

    $.fn.inputfilter = function(settings) {
        var that = this;
        $(that).data('inputfilter-old-value', $(that).val());
        // IF REGEXP
        if (settings instanceof RegExp) {
            $(that).keyup(function(e) { keyEvent(that, settings, e) });
            $(that).keydown(function(e) { keyEvent(that, settings, e) });
        } else if (typeof settings == 'string') { // IF OTHER
            switch (settings) {
                case 'numeric':
                    // numeric filter
                    $(that).keyup(function(e) { keyEvent(that, /^(\d+)$/i, e) });
                    $(that).keydown(function(e) { keyEvent(that, /^(\d+)$/i, e) });
                    break;
                case 'english':
                    // regexp
                    $(that).keyup(function(e) { keyEvent(that, /^[-a-zA-Z ]*$/i, e) });
                    $(that).keydown(function(e) { keyEvent(that, /^[-a-zA-Z ]*$/i, e) });
                    break;
                case 'english+numeric':
                    // regexp
                    $(that).keyup(function(e) { keyEvent(that, /^[-a-zA-Z0-9 ]*$/i, e) });
                    $(that).keydown(function(e) { keyEvent(that, /^[-a-zA-Z0-9 ]*$/i, e) });
                    break;
            }
        }
    }
})(jQuery);