
// const person =  {
//   name: 'Anrdija',
//   age: 38,
//   location: {
//     city: 'Zagreb',
//     temp: 5
//   }
// };

// const { name: firstname = 'Anonymus', age } = person;
// console.log(`${name} is ${age}.`);

// // const name = person.name;
// // const age = person.age;
// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book =  {
//   title:  'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher:  {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName) ; // Penguin, self-Published



// ---------- Array destructuring ----------

// const address = ['Odvojče 1245', 'Bistra', 'Hrvatska', '10298'];
// const [street, city, state = New Quark, zip] = address;
// console.log(`You are in ${city} ${state}`)

const item = ['coffee (hot)', '$2', '$2.53', '$2.74'];
const [coffee, , medium  ] = item;

console.log(`A medinum ${coffee} costs ${medium}.`);
