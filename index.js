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

// get user id, get username, get repo, get commit

function getUser(id) {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: id, username: " Johnson" });
    }, 2000);
  });
}

function getRepo(username) {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["repo1", "repo2"]);
    }, 2000);
  });
}

function getCommits(repo) {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Commits");
    }, 2000);
  });
}

function displayCommits(commits) {
  console.log(commits);
}

// getUser(1)
//   .then((user) => getRepo(user.username))
//   .then((repos) => getCommits(repos[0]))
//   .then((commit) => console.log("Commit : ", commit))
//   .catch((ex) => console.log(ex.message));

// Async and Await approach
async function displayCommit() {
  try {
    const user = await getUser(1);
    const repos = await getRepo(user.username);
    const commit = await getCommits(repo[0]);
    console.log(commit);
  } catch (ex) {
    console.log(ex.message);
  }
}
// use try catch to get error

displayCommits();
