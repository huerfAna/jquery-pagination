$.fn.PageIt = function(options) {
    var lenght,
        page_pointer, // starts at 0
        item_count, // Counts the dataElement
        items_a_page = 10, // Number of items on a page
        page_count, // Total of pages
        paginator_template = '<div id="paginator"><a href="#">{{ page_number }}</a></div>';
        defaults = {
            dataElement: '#dataElement li',
            navElement: 'div',
        },
        opts = $.extend(defaults, options);

    init();
    buildUI();

    function init() {
       hideAllPageItems();

       page_pointer = 0;  


       if($(opts.dataElement)) {
            item_count = $(opts.dataElement).length;
       }

       page_count = Math.ceil(item_count / items_a_page); 
       item_pointer = page_pointer * page_count;
    }
    
    // Hide all items
    function hideAllPageItems() {
        $('#dataElement li').css({display: 'none'});
    }

    function moveToPage() {

        var show_page_items = function(i_p) {
            var $el;
            i_p++;
            $el = $('#dataElement li:nth-child(' + i_p + ')');

            $el.css({display: 'block'});

            return i_p;
        };


        for(var i=0; i < items_a_page; i++) { 
            item_pointer = show_page_items(item_pointer);
        }
    }

    function buildUI() {
        buildPaginator();
        /*buildSlider();*/
        moveToPage();
    }

    function buildPaginator() {
             
    }


    // Count total pages
    // slice the pages function
    // buildUI
    //
};
