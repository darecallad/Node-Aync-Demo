console.log("Before");
getUser(1, getRepo);
// cannot do const user = getUser(1);
//Callbacks

// get raid of Callback hell
function getReop(user) {
  getRepo(user.gitHubUsername, getCommits);
}
function displayCommits(commits) {
  console.log(commits);
}
function getCommits(repo) {
  getCommits(repo, displayCommits);
}

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
