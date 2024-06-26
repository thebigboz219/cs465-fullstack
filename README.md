# cs465-fullstack
CS-465 Full Stack Development with MEAN

Architecture

    Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, 
    JavaScript, and the single-page application (SPA). Why did the backend use a NoSQL MongoDB database?
    
    - When we initially designed our application the core functionality of the program was seperated into multiple HTML pages 
    with hard coded information that was called on initiation. This allowed for easy navigation between pages but resulted in 
    long(er) load times. Once we progressed to the next stage we introduced our APIs and JavaScript to interact with a database 
    setup to hold our travel data. Application functionality was still split between multiple pages however individual functions
    were being routed through new controllers to call specific components. Towards the end of development we formatted our admin 
    page to work as an SPA. The SPA worked by loading the entirety of a page and calling forth certain components when the user 
    interacts with the page. By doing this users only had an initial "long" load time before all subsequent component calls 
    would load significantly faster. In a SPA format we also benefit from being able to section off individual functions to 
    their own components that can then be called individually as needed by the SPA. This makes debugging and modulating this 
    section of the application significantly easier than our earlier two stages of development, however as functions become 
    more complex and call for more information, developers may benefit from using the multi-page setup of Express HTML.
    
    - We utilized a NoSQL MongoDB database for two simple reasons as I understand it. The first is for the combination with
    Mongoose to create an easy interface for adding and modifying entries to our database. This then goes into my second 
    reason, the ability to create a schema for a document and then populate a database with entries based on that schema's
    format. This allows for customized data listings that can fit most needs for a developer. All of this is without saying
    how mongoose operations pair well with the javascript and API interactions we've established in this application. Much
    of the data structure for MongoDB is similar to that of our controllers so the transition of data is much easier without
    much formatting.

Functionality

    How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
    Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and 
    name the benefits that come from reusable user interface (UI) components.
    
    - JavaScript is the format for web browser functionality on the user's side. This kind of code would handle user 
    interactions, manipulating the Document Object Model, and making AJAX requests. JSON on the other hand is a lightweight
    format for building structured data using a pairing system. In our application JavaScript from the client is easily
    converted to JSON before being sent through a majority of the systems pieces. JSON is a standard data medium for data
    exchange, serialization, and API requests and responses. Because of this our API can be structured to parse data back
    and forth with minimum conversions necessary thus speeding up the whole process.
    
    - As our travlr application became more solidified in how it presented users with travel data, I began adding
    functionality for administrative users to add, edit, and remove travel data from the existing listings. I created seperate
    components to handle the addition and editing processes, however the deletion function was build into the tripcard 
    component. By using seperate components for the add and edit function, I have not only made it easier for future developers
    to come in and debug each specific function, I have also made it to where these functions can be moved and easily 
    implemented in a new application with minimal alterations. This ease of implementation also keeps code redundancy to a 
    minimum making the overall readability of the code significantly better.

Testing

    Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties
    of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack 
    application.
    
    - Working through this project I've come to understand endpoints as the URL necessary to initiate a certain functionality 
    of the application. To this extent it also serves as a shortcut for users who wish to jump to this function rather than 
    going through the various menus and workarounds a site may take you through. Once a user has reached this endpoint then 
    the methods connected to this page are able to be called, thus initiating the specific functions of the given page. These 
    methods can initiate simple calculations, call other methods that request access to a database, or even request navigation
    to a different page. Because of this we have security for access to these different endpoints and therefore their functions.
    Security in respect to this project was a token generated for users who had an authenticated login connected with our 
    database. This token would be attatched to the user's browser so that it could be referenced when a navigation call was
    made. If the security check didn't find a valid token attatched to the user's account then they were denied access and 
    sent back to the previous page. For other applications the methods may vary but the concepts are similar in what they are
    looking for. With each of these pieces you can go through and test where a program is letting users through without valid
    credentials and mend the issue. 

Reflection

    How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in
    this course to help you become a more marketable candidate in your career field?
    
    - This class has given me some wonderful insight into the inner workings of web applications that work through a browser. 
    Seeing how function calls are developed to navigate users to different pages and lock in certain methods to the page. The 
    later sections of this class then taught me how APIs are developed to access a given database (in this case MongoDB) and
    modify information to fit the current need. I also learned a bit about how to style a webpage for easy function access,
    however I do wish we got a better look into how the overall style of the page was created. With this new knowledge I hope
    to be a more valuable candidate for hire when I begin searching for openings in this field.
