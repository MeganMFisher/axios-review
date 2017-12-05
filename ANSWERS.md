 What does API stand for?
  
    Application Program Interface.  A server in which we are going to communicate with. The server is set up to handle all sorts of requests. When we send information through a server it goes through the API handles the request, gets what we requested, and returns it back to us. Program to Program interface. Two programs that are communicating back and forth. A way for us to interact with the data from other programs. 
  
  
  
 Whats the link between one program and another?

    The Internet. It travels across the internet and finds the other program based off of the url. We have to tell it where to go. 



 What is sent with the URL in the API call?

    Parameter, queries, and the body of the request.
   
   
   
 Where are parameters and queries stored in the URL of the API call?

    Parameters and queries are sent in the url as extra information tacked onto the url. The to address on the envelope. We don't want parameters and queries to hold sensitive information. 
    
    

 Where is the body of the request stored in the URL of the API call?

    It is sent with the url but nested inside where others can't see. The body of the request goes inside the envelope. Sensitive information goes in the body of the request. Information you don't want others to see. 
    
    
    
 What does REST stand for and what is it?

    Representational State Transfer. Rest is a protocal or standard for two programs to interact and send information back and forth. It is the most popular protocal for interacting with other servers.  An agreed upon standard of operations for interacting with other servers. 
    
    
    
 What does CRUD stand for?

    Create: Creating new information.
    Read: Reading information.
    Update: Updating information.
    Delete: Deleting information.
    
    
    
 What are the four most common methods that come with REST and what part of CRUD is it tied to?

    Post   || Create = Creating new data
    Get    || Read   = Reading/Seeing data
    Put    || Update = Updating the data
    Delete || Delete = Deleting data
    
    

 What does HTTP stand for?

    Hyper Text Transfer Protocol
    Through the url and a get-request we are able to send an HTTP request across the internet. The internet takes it and delivers it to the server and gets the information we requested and sends back a response to where the request was originally made. 
    
    
    
 What does JSON stand for and what is it?

    JavaScript Object Notation. It is a syntax for storing and exchanging data. When we interact with APIs and Servers it is passed as a JSON object.
    
    

 True or False You must use double quotes when dealing with a JSON response?

    True. You cannot use single quotes with JSON objects.
    
    JSON_Object = { "name":"Wilma", "age":31, "city":"Bedrock" }
    
    
* When exchanging data between a browser and a server, the data can only be text. JSON is text, and we can convert any JavaScript object into JSON, and send JSON to the server. We can also convert any JSON received from the server into JavaScript objects. This way we can work with the data as JavaScript objects, with no complicated parsing and translations.


    
    
http://smurfs.com/api/smurfs/1    
 What is the protocol we are using based off of the above URL?

    http
    
 What is the domain(IP address) we are using based off of the above URL?

    smurfs.com
  
 What is the remainder of the URL above?

    URL parameters based off the servers requirements. Basically what the server dictates we must add because they said so. So /api/smurfs is added to get the information we want based off of the way the server is set up. 
  
  
  
 How do you add a url parameter to your url that is sent to the server?

    http://smurfs.com/api/smurfs/3
    Pass it at the end of your url after an additional / at the end of a URL. The parameter can change. If you had an online store and passed the id number as a parameter depending on which item you clicked on to get only the information of that single item you would pass the url the id number as the parameter so you can get just the one item instead of all the items. 
    
    
    
* url parameters can be numbers or words. Parameters are extra pieces of information seperated by a '/' that are part of the URL. Parameters are extra pieces of information added to our URL that is sent to the server.

* queries are also extra pieces of information added to our URL that is sent to the server. Passed as key value pairs after a '?'.

* If a server asked for information as a parameter and you send the same information as a query it will not work because the server won't be set up for a query and you will not get the information you want. You MUST send extra information in the way the server is set up to receive it. 

    
    
 How do you add a url query to your url that is sent to the server?

    http://smurfs.com/api/smurfs?id=1&name=smurfette

    A '?' is added after the url then you use key value pairs to send the information. id=i  name=smurfette
  
  
 What is axios?

    A simple http client that helps us make API calls. Promise based HTTP client for the browser and node.js
    
    

 How do you use axios in your React app?

    1. npm install axios 
    2. import it into your file: import axios from 'axios';
    3. make the api calls: axios.get('https://apiCallURL'); 



 What is a Javascript Promise?

    A promise in Javascript is that it will get the information and sends a request to get the information eventually as soon as it has the information requested it sends it back. Then you have to decide what you are doing with it as soon as it comes back. When information comes back .then() is invoked. It allows us to have asynchronous code. A promise takes in a callback function in the .then() which is ran only after the .then() is called when information is returned.

    You're at a restaurant and you order your food and they give you a number(or a promise that they will bring you the food you paid for as soon as it is ready.) You sit down at a table and hold onto that number. Once the food is done they bring it out to you and take the number in exchange for the food they promised you. You then get to decide how you eat that food. Do you scarf it down? do you cut it up first? do you throw it at the wall?



 Write an axios call to GET all the product information from 'https://practiceapi.devmountain.com/products/'. Once that data comes back return the data from the response.


    axios.get('https://practiceapi.devmountain.com/products/').then(function(res) { <==Must have a parameter because it represents the response fromt the API call. 
      return res.data  
    })
    
    
    
Write an axios call to GET information from 'https://practiceapi.devmountain.com/products/'. We want only the information from one product instead of all the products. Add a parameter to your URL with the id of 'jvmquxr'. Once that data comes back return the data from the response. 

    axios.get('https://practiceapi.devmountain.com/products/jvmquxr').then(function(res) { 
      return res.data  
    })
    


Write a axios call to DELETE information from 'https://practiceapi.devmountain.com/products/'. We want to delete the information for the product with the id of '27kqpvi'. Pass the id as a query on the URL. Once that data comes back return the data from the response. 


    axios.delete('https://practiceapi.devmountain.com/products?id=27kqpvi').then(function(res) { 
      return res.data  
    })


What does .catch() do?

    It catches the error. The catch() method returns a Promise and deals with rejected cases only. A Function called when the Promise is rejected. This function has one argument: The rejection reason.
    
    axios.get('https://practiceapi.devmountain.com/products/').then(function(res) {  
      return res.data  
    }).catch(function(error) {
      console.log(error)
    })
    
    
    
What does the lifecycle method componentDidMount() do?

    componentDidMount() LifeCycle method. Sets our initial state with the contents of the function. After our component mounts for the first time it will use this function. It won't run on every re-render just the intial mounting of the component. 
  
    componentDidMount() is invoked immediately after a component is mounted. Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request. Setting state in this method will trigger a re-rendering.
  
  
