# cs465-fullstack
CS-465 Full Stack Development with MEAN

Architecture

    Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
    Why did the backend use a NoSQL MongoDB database?
    - When we initially designed our application the core functionality of the program was seperated into multiple HTML pages with hard coded information that was called on initiation. This allowed for easy navigation between pages but resulted in long(er) load times. Once we progressed to the next stage we introduced our APIs and JavaScript to interact with a database setup to hold our travel data. Application functionality was still split between multiple pages however individual functions were being routed through new controllers to call specific components. Towards the end of development we formatted our admin page to work as an SPA. The SPA worked by loading the entirety of a page and calling forth certain components when the user interacts with the page. By doing this users only had an initial "long" load time before all subsequent component calls would load significantly faster. In a SPA format we also benefit from being able to section off individual functions to their own components that can then be called individually as needed by the SPA. This makes debugging and modulating this section of the application significantly easier than our earlier two stages of development, however as functions become more complex and call for more information, developers may benefit from using the multi-page setup of Express HTML.
    - We utilized a NoSQL MongoDB database for two simple reasons as I understand it. The first is for the combination with Mongoose to create an easy interface for adding and modifying entries to our database. This then goes into my second reason, the ability to create a schema for a document and then populate a database with entries based on that schema's format. This allows for customized data listings that can fit most needs for a developer. All of this is without saying how mongoose operations pair well with the javascript and API interactions we've established in this application. Much of the data structure for MongoDB is similar to that of our controllers so the transition of data is much easier without much formatting.

Functionality

    How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
    Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

Testing

    Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

Reflection

    How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
