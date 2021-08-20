const p = new Promise((resolve, reject) => {
  resolve(1);
  reject(new Error("Message"));
});

p.then((result) => console.log("Result: ", result)).catch((ex) => {
  console.log("Error: ", ex.message);
});
