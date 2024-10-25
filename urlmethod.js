 var url = require("url")

 const myaddress = new URL('https://www.example.com:8000/path/name?query=hello#fragment');
 console.log(myaddress.protocol);  // Output: 'https:'
 console.log(myaddress.hostname);  // Output: 'www.example.com'
 console.log(myaddress.port);      // Output: '8000'
 console.log(myaddress.pathname);  // Output: '/path/name'
 console.log(myaddress.search);    // Output: '?query=hello'
 console.log(myaddress.hash);      // Output: '#fragment'