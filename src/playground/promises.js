const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Miroslav',
      age: 36
    });
    // reject('Something went wrong!')
  }, 2500);
});

console.log('before');

promise.then((data)=>{
  console.log('1', data);
  
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('this is my other promise');
    }, 2500);
  });
}).then((str) => {
  console.log('does this run?', str);
}).catch((error) => {
  console.log('error: ', error);
});

console.log('after');


