PROJECT: VSTDA Api

GETTING STARTED: 
1) Startup the server by typing in "nodemon index.js" which is in the "server folder" in a terminal such as Git Bash.
2) Open a web browser.
3) Visit localhost:8484/
4) Server will respond by sending an object to the web browser.
5) Visit localhost:8484/api/TodoItems
6) Server will respond by sending an array of objects.
7) Visit localhost:8484/api/TodoItems/:number "where number is a number between 0-2"
8) Server will respond by sending the object in the array that has the same id as the value of the number chosen.
9) Open postman and enter and object and send to localhost:8484/api/TodoItems/
10) If the array has an object with a matching ID the object data will replace the current object. 
11) If the array does NOT have an object with a matching ID, the new object will be appended to the array. 
12) Use the DELETE feature on postman localhost:8484/api/TodoItems/:number to delete an object with a specific ID.

