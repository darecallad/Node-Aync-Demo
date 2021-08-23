const p = Promise.resolve({ id: 1 });
p.then((result) => console.log(result));

// catch to get the error
// then to get the resolve

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async operation 1");
    resolve(1);
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async operation 2");
    resolve(2);
  }, 2000);
});
// Promise.race  will return the first value to fulfilled
Promise.all([p1, p2]).then((result) => console.log(result));
// if any promise rejected the result will showing reject
