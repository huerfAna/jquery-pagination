$.fn.PageIt = function(options) {
    var lenght,
        page_pointer, // starts at 0
        item_count, // Counts the dataElement
        defaults = {
            dataElement: '#dataElement li',
            navElement: 'div',
        },
        opts = $.extend(defaults, options);

    init();
    buildUI();

    function init() {
       countPages();
       page_pointer = 0;  
    }

    // add class hidden to none page items
    function slice() {
        var page_count = Math.ceil(item_count / 5); 

        item_pointer = page_pointer * page_count;
        item_pointer++;

        //lus oplossen via recursie
        $('#dataElement li:nth-child(' + item_pointer + ')').css({display: 'none'}).next().css({display: "none"});
    }

    function buildUI() {
        slice();
    }

    function countPages() {
        if($(opts.dataElement)) {
            item_count = $(opts.dataElement).length;
        }
    }

    // Count total pages
    // slice the pages function
    // buildUI
    //
};
