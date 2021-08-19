console.log("Before");
getUser(1);
// cannot do const user = getUser(1);
console.log("After");

//Callbacks
//Promises
//Async/await

function getUser(id) {
  setTimeout(() => {
    console.log("Reading a user from a database.");
    return { id: id, gitHubUsername: "John" };
  }, 2000);
}
