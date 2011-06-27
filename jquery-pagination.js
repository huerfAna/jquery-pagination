(function( $ ) {
    $.fn.Paginate = function(options) {
        var page_pointer = 0, // starts at 0, points to the current page.
            item_pointer, // starts at 0, points to the first item of the current page. 
            page_count, // Number of pages
            self = $(this), // refers to the data container

            defaults = {
                data_element: 'li', 
                nav_element: null,
                nav_link : '<a class="pagination_page" href="#">${$item.data}</a>',
                //TODO: debug if this is correctly working
                start_page: 0,
                nav_link_count: 5,
                nav_current_pos: 3,
                items_a_page: 5, // Number of items on a single page.
                fade_speed: null, // Represents the speed at wich the elements are shown, the value is passed to the fadeIn Jquery function.
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
            self.append('<' + opts.data_element + '>'  + text + '</' + opts.data_element + '>'); 

            // After the element has been added , a UI rebuild is needed.
            buildUI();
        }

        //TODO: hide the last item 
        function prependItem(text) {
            self.prepend('<' + opts.data_element + '>'  + text + '</' + opts.data_element + '>'); 
            buildUI();
        }


        function init() {
           //setup our pagination template
            $.template('pag_nav_wrapper_tmpl', opts.nav_link);

           initValues();


        }

        function initValues() {

           var item_count; // Number of items to paginate. This counts the opts.data_element.

           if(self.children(opts.data_element)) {
                item_count = self.children(opts.data_element).length;
           }

           page_count = Math.ceil(item_count / opts.items_a_page); 
           item_pointer = page_pointer * page_count;

        }
        
        // Hide all items
        // TODO: this causes some overhead , since not all the items are visible
        function hideAllPageItems() {
            self.children(opts.data_element).css({display: 'none'});
        }

        // The paging works by first hidding all page items then, 
        // showing all of the items on the current page.
        function moveToPage(i) {
            item_pointer = i * opts.items_a_page;

            hideAllPageItems();

            page_pointer = i;

            var show_page_items = function(i_p) {
                var $el;
                i_p++;
                $el = self.children(opts.data_element).filter('li:nth-child(' + i_p + ')');


                if(opts.fade_speed) {
                    $el.fadeIn(opts.fade_speed);
                } else {
                    $el.css({'display': 'block'}); 
                }

                return i_p;
            };


            for(var i=0; i < opts.items_a_page; i++) { 
                item_pointer = show_page_items(item_pointer);
            }


            // Rebuild the navigation
            $(opts.nav_element).empty();
            buildPaginator();
            initEvents();

        }

        function initEvents() {
            $('.pagination_page').click(function(e) {
                var page = parseInt(e.currentTarget.innerHTML);
                moveToPage(page-1);
            });
        }

        function buildUI() {
            initValues();

            if(opts.nav_element) {
                buildPaginator();
            }

            
            moveToPage(opts.start_page);

            // Setup event handlers.
            initEvents();
        }

        function buildPaginator() {
            var i, 
                y,
                _buildPaginator = function() {

                    if(page_count > opts.nav_link_count && page_pointer < opts.nav_current_pos) {

                        y=1;

                        i=1;

                        do {
                            compiled_tmpl = $.tmpl("pag_nav_wrapper_tmpl", i);
                            (i == page_pointer+1) && compiled_tmpl.addClass("current");
                            compiled_tmpl.appendTo(opts.nav_element);
                            i++;
                            y++;
                        } while(i <= page_count && y <= opts.nav_link_count);



                    } else {

                        y=1;

                        if(page_pointer > (page_count - opts.nav_current_pos)) {
                            if(page_count - page_pointer < opts.nav_link_count) {
                                i=page_count + 1- opts.nav_link_count;
                            } else {
                                i=page_pointer+1-opts.nav_current_pos;
                            }
                        } else {
                            i=page_pointer-opts.nav_current_pos+1;
                        }

                        do {
                            compiled_tmpl = $.tmpl("pag_nav_wrapper_tmpl", i);
                            (i == page_pointer+1) && compiled_tmpl.addClass("current");
                            compiled_tmpl.appendTo(opts.nav_element);
                            i++;
                            y++;
                        } while(i <= page_count && y <= opts.nav_link_count );
                         
                    }
                };

            // Check if the pagination links have been constructed before
            if(!$(opts.nav_element).has('a').length) {
                _buildPaginator();
            } else {
                // remove the links and rebuild the pagination menu 
                $(opts.nav_element).empty();

                _buildPaginator();
            }
        }


        // Count total pages
        // slice the pages function
        // buildUI
        //
    };
})( jQuery );
