$.fn.PageIt = function(options) {
    var lenght,
        page_pointer, // starts at 0
        item_count, // Counts the dataElement
        items_a_page = 3, // Number of items on a page
        item_pointer, 
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
       //setup our pagination template
        $.template('page_template', '<a class="pagination_page ${$item.data}" href="#">${$item.data}</a>');


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

    // The paging works by first hidding all page items then, 
    // showing all of the items on the current page.
    function moveToPage(i) {

        item_pointer = i * items_a_page;

        hideAllPageItems();

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
        moveToPage(1);

        // Setup event handlers.
        $('.pagination_page').click(function(e) {
            moveToPage($(this).index());
        });
    }

    function buildPaginator() {
        for(var i=1; i <= page_count; i++) {
            $.tmpl("page_template", i).appendTo(opts.navElement);
        }
    }


    // Count total pages
    // slice the pages function
    // buildUI
    //
};
