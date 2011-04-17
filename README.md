#jquery-pagination

Simple, flexible, extendable jquery plugin that handles pagination.


##Usage

    $('#DataElement').Paginate();

### Options
    {
        data_element: 'li', // Holds element containing each seperate piece of data to be paginated.
        pag_element: 'div',
        pag_nav_el : '<a class="pagination_page" href="#">${$item.data}</a>', // Holds the template to be rendered for each individual pagination link.
        page_pointer: 0,
        start_page: 0,
        widget_type: 'paginator',
        items_a_page: 5 // Number of items on a single page.
    }
    




