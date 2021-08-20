const p = new Promise((resolve, reject) => {
  // Async work
  setTimeout(() => {
    // resolve(1);
    reject(new Error("Showing error message."));
  }, 2000);
});

p.then((result) => console.log("Solve Result : ", result)).catch((ex) =>
  console.log("Error : ", ex.message)
);
