import * as firebase from 'firebase';
import { updateLocale } from 'moment';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default};

// //child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// //chile_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// //chile_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('notes').push({
//   title: 'Chumbva',
//   body: 'bjezi odavde'
// })

// database.ref('moji snovi').push({
//   title: 'ludi san',
//   body: 'sanjao sam noćas da te nema'
// })

// database.ref('expenses')
// .once('value')
// .then((snapshot)=>{
//  const expenses = [];
//  snapshot.forEach((childSnapshot)=>{
//   expenses.push({
//     id: childSnapshot.key,
//     ...childSnapshot.val()
//   });
//  });
//  console.log(expenses);
//  });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot)=> {
//   expenses.push({
//     id: childSnapshot.key,
//     ...childSnapshot.val()
//     });
//   });
//    console.log(expenses);
// });

// database.ref('expenses').push({
//   description: 'Troshak tri',
//   note: 'opis koji je ovdje',
//   amount: 3750,
//   createdAt: 17022019
// })

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.position} at ${val.job.company}`);
// })


// database.ref('location')
//         .once('value')
//         .then((snapshot) => {
//           const val = snapshot.val();
//           console.log(val);
//         })
//         .catch((e) => {
//           console.log('Error fetching data', e);
//         })

// database.ref().set( {
//   name: 'Mario Nezmah',
//   age: 26,
//   stressLevel: 6,
//   job: {
//     position: 'software developer',
//     company: 'Google' 
//   },
//   location: {
//     city: 'Zagreb',
//     country: 'Croatia'
//   }
// });
// }).then(() => {
//   console.log('Data is saved');  // resolve
// }).catch((e) => {                               //catch = then
//   console.log('This failed', e); // reject
// });

// database.ref('isSingle')
//         .remove()
//         .then(()=> {
//           console.log('remove succeeded');
//         })
//         .catch((err)=>{
//           console.log('eremove failed', err);
//         });
// database.ref().update({
//   name: 'Mike',
//   age: 19,
//   job: 'developer',
//   isSingle: null
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

