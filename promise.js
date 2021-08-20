const p = new Promise((resolve, reject) => {
  // Kick off some asunc work
  // ....
  setTimeout(() => {
    // resolve(1);
    reject(new Error("Message"));
  }, 2000);
  //   reject();
});

p.then((result) => console.log("Result", result)).catch((err) =>
  console.log("Error", err.message)
);

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
    //    reject(new Error("Error Message"));
  }, 2000);
});

p.then((result) => console.log("Resolve result : ", result)).catch((err) =>
  console.log(err.message)
);
