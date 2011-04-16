$.fn.PageIt = function(options) {
    var page_pointer, // starts at 0, points to the current page.
        item_count, // Number of items to paginate. This counts the opts.dataElement.
        item_pointer, // starts at 0, points to the first item of the current page. 
        page_count, // Number of pages
        paginator_template = '<div id="paginator"><a href="#">{{ page_number }}</a></div>';
        defaults = {
            dataElement: '#dataElement li',
            navElement: 'div',
            page_pointer: 0,
            start_page: 0,
            items_a_page: 5 // Number of items on a single page.
        },
        opts = $.extend(defaults, options);

    init();
    buildUI();
    
    return {
        moveToPage: moveToPage,
        buildUI: buildUI,
        appendItem: appendItem,
        prependItem: prependItem
    };

    function appendItem(text) {
        $("#dataElement").append(text); 

        // After the element has been added , a UI rebuild is needed.
        buildUI();
    }

    function prependItem(text) {
        $("#dataElement").prepend(text); 
        buildUI();
    }


    function init() {
       //setup our pagination template
        $.template('page_template', '<a class="pagination_page" href="#">${$item.data}</a>');

       initValues();


    }

    function initValues() {

       if($(opts.dataElement)) {
            item_count = $(opts.dataElement).length;
       }

       page_count = Math.ceil(item_count / opts.items_a_page); 
       item_pointer = page_pointer * page_count;

    }
    
    // Hide all items
    function hideAllPageItems() {
        $('#dataElement li').css({display: 'none'});
    }

    // The paging works by first hidding all page items then, 
    // showing all of the items on the current page.
    function moveToPage(i) {

        item_pointer = i * opts.items_a_page;

        hideAllPageItems();

        var show_page_items = function(i_p) {
            var $el;
            i_p++;
            $el = $('#dataElement li:nth-child(' + i_p + ')');

            $el.css({display: 'block'});

            return i_p;
        };


        for(var i=0; i < opts.items_a_page; i++) { 
            item_pointer = show_page_items(item_pointer);
        }
    }

    function buildUI() {
        initValues();

        buildPaginator();

        moveToPage(opts.start_page);

        // Setup event handlers.
        $('.pagination_page').click(function(e) {
            moveToPage($(this).index());
        });
    }

    function buildPaginator() {
        // Check if there the pagination links have been constructed before
        if(!$(opts.navElement).has('a').length) {

            // Add the pagination link anchor elements to the opts.navElement
            for(var i=1; i <= page_count; i++) {
                $.tmpl("page_template", i).appendTo(opts.navElement);
            }

        } else {
            // remove the links and rebuild the pagination menu 
            $(opts.navElement).empty();

            for(var i=1; i <= page_count; i++) {
                $.tmpl("page_template", i).appendTo(opts.navElement);
            }
        }
    }


    // Count total pages
    // slice the pages function
    // buildUI
    //
};
