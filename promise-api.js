const p = Promise.resolve({ id: 1 });
p.then((result) => console.log(result));

// catch to get the error
// then to get the resolve
