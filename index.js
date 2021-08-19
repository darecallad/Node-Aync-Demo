console.log("Before");
getUser(1, (user) => {
  console.log("User", user);

  // Get the repositories
  getRepo(user.gitHubUsername, (repo) => {
    console.log("Getting Repo");
    console.log(repo);
  });
});
// cannot do const user = getUser(1);
console.log("After");

//Callbacks
//Promises
//Async/await

//Dealing with Callback function
function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user from a database.");
    callback({ id: id, gitHubUsername: "John" });
  }, 2000);
}

function getRepo(username, callback) {
  setTimeout(() => {
    console.log("Loading Repo for :" + username);
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}
