#jquery-pagination

Simple, flexible, extendable jquery plugin that handles pagination.

##Dependencies
jquery-pagination uses jquery-tmpl to render the pagination navigation links.

##Usage

### Define the data element
This element contains all elements to be paginated. 
For example:
    `<ul>
        <li>Bike</li>
    </ul>`

    $('#DataElement').Paginate();


### Options
    {
        // Element containing each seperate piece of data to be paginated.
        data_element: 'li',

        // The pagination navigation container
        pag_element: '#pagination_nav', 

        // Holds the template to be rendered for each individual pagination link.
        pag_nav_el : '<a class="pagination_page" href="#">${$item.data}</a>', 

        // First page to be shown.
        start_page: 0,

        // Number of items on a single page.
        items_a_page: 5 
    }
    




