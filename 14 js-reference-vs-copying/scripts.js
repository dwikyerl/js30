// start with strings, numbers and booleans
// let age = 80;
// let age2 = age;
// console.log(age, age2);
// age = 200;
// console.log(age, age2);

// let name = 'Dwiky';
// let name2 = name;
// console.log(name, name2);
// name2 = 'Erlangga';
// console.log(name, name2);

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;
console.log(players, team);

// You might think we can just do something like this:
// team[3] = 'Joe';
// console.log(players, team);

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice();

// one way

// or create a new array and concat the old one in
const team3 = [].concat.players;

// or use the new ES6 Spread
const team4 = [...players]; 

const team5 = Array.from(players); 


// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: 'Dwikyerl',
    age: 22
};

// and think we make a copy:
const captain = person;
// captain.number = 99;
// console.log(captain, person);
// how do we take a copy instead?
const captain2 = Object.assign({}, person, {age: 30});
console.log(captain2, person);
// We will hopefully soon see the object ...spread
const captain3 = {...person, age: 20};
console.log(captain3, person);

// Things to note - this is only 1 level deep - both for Arrays and Objects. 
// lodash has a cloneDeep method, but you should think twice before using it.
const dwiky = {
    name: 'dwiky',
    age: 30,
    social: {
        twitter: '@dwikyerl',
        facebook: 'dwikyerl'
    }
}

console.log(dwiky);
const fake = {...dwiky};
fake.social.twitter = "@goodboy";
console.log(fake, dwiky);

const fake2 = JSON.parse(JSON.stringify(dwiky));
fake2.social.twitter = "@goodman";
console.log(fake2, dwiky);
