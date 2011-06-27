#jquery-pagination

Simple and flexible jquery plugin that handles pagination.

##Dependencies
jquery-pagination uses jquery-tmpl to render the pagination navigation links.

##Usage

### Define the data element
This element contains all elements to be paginated. 
For example:

    <ul id="DataElement">
        <li>Bike</li>
    </ul>

### Define the pagiantion links wrapper

    <div id="pagination_nav"/>

### Finally, pagiante!

    $('#DataElement').Paginate();


### Options
    {
        // Number of navigation links 
        nav_link_count: 5,

        /* Element containing each seperate piece of data to be paginated.
         * In the above example the data_element would be li. */
        data_element: 'li',

        /* Each individual link to a page can be rendered using a jquery template.
         * This options holds the template to be rendered for each individual pagination link. 
         * The example below is the default when the pag_nav_el option is not present.
         * Each page link will be appended to element the pag_element refers to. */
        nav_link: '<a class="pagination_page" href="#">${$item.data}</a>', 


        // First page to be shown. The pages are zero-based. The default is 0.
        start_page: 0,

        // Number of items on a single page. Default is 5.
        items_a_page: 5 
    }
    

### Adding items on the fly
It's possible to append or prepend items after the paginate object has been created.

    var paginate = $('#DataElement').Paginate(); 

    paginate.appendItem("Test");




