#jquery-pagination

Simple, flexible, extendable jquery plugin that handles pagination.

##Dependencies
jquery-pagination uses jquery-tmpl to render the pagination navigation links.

##Usage

### Define the data element
This element contains all elements to be paginated. 
For example:

    <ul id="DataElement">
    <li>Bike</li>
    </ul>

    <div id="pagination_nav"/>

    $('#DataElement').Paginate();


### Options
    {
        /* Element containing each seperate piece of data to be paginated.
         * In the above example the data_element would be li. */
        data_element: 'li',

        /* This jquery selection refers to the element containing the pagination navigation links. */
        pag_element: '#pagination_nav', 

        /* Each individual link to a page can be rendered using a jquery template.
         * This options holds the template to be rendered for each individual pagination link. 
         * The example below is the default when the pag_nav_el option is not present. */
        pag_nav_el : '<a class="pagination_page" href="#">${$item.data}</a>', 

        // First page to be shown.
        start_page: 0,

        // Number of items on a single page.
        items_a_page: 5 
    }
    




