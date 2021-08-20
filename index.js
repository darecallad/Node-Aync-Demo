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
function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading a user from a database.");
      resolve({ id: id, gitHubUsername: "John" });
    }, 2000);
  });
}

function getRepo(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Loading Repo for :" + username);
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling Github API...");
      resolve(["commit"]);
    }, 2000);
  });
}
