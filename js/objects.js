// =========== OBJECTS =============

let firstObject = new Object();
console.log(firstObject);

let person = {
    name: 'Nico',
    hobby: 'Reading books',
    age: 37,
    isAwesome: true,
    favoriteBooks: ['Divine Comedy', 'Count of the Monte Cristo', 'Art of Warfare'],
    'has powers': 'yes, yes really',
    pet: {
        type: 'cat',
        name: 'Mittens',
        age: 2,
    },
};

console.log(person);

// they both access the person's name
console.log(person.name);
console.log(['name']);

console.log(person.hobby);

console.log(person.isAwesome);

console.log(person.favoriteBooks);
console.log(person.favoriteBooks[0]);

console.log(person['has powers']);

console.log(person.pet.name);

// =========== Object Properties

// delete object
delete person.hobby;
console.log('personnnnnn', person);

// key in object
console.log('name' in person);

for (let key in person) {
    // debugger
    console.log('the key name is', key);
    console.log('this key value is', person[key]);
}


// not able to access property
// alert(person);

let alertArray = ['first val', 'second val', 'third val'];

// alert(person.name + ' ' + person.age);

// =========== Arrays and Objects

let animals = [
    {
        type: 'cat',
        name: 'Mr. Bojangles',
        isEvil: true
    },
    {
        type: 'dog',
        name: 'Bob',
        isEvil: false
    },
    {
        type: 'bird',
        name: 'Doug',
        isEvil: true
    },
];

// iterating through animals to print name
for (let key in animals) {
    // console.log('the key name is: ', key);
    console.log('this is key value ', animals[key].name);
}

// another alternative answer
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i].name);
}

// =========== Higher Order Arrays

// for each
animals.forEach(function (animal) {
    // debugger
    console.log('my animal', animal);
});

animals.forEach(function (animal){
    console.log('my animal name', animal['name']);
});


// arr.map()
let animalTypes = animals.map(animal => {
    console.log('inside the map func', animal);
    return animal.type;
});

console.log('animal types:', animalTypes);

// arr.filter()
let evilAnimals = animals.filter(animal => {
    // check if object is evil
    return animal.isEvil === true; // the filtering condition
});

console.log('evil animals:', evilAnimals);

let evilAnimalNames = animals.filter((animal) => {
    return animal.isEvil === true;
}).map((evilAnimal) => {
    return evilAnimal.name;
});

console.log('evil animal names:', evilAnimalNames);

// =================== Morning Challenge 3/1/2021 =========================

let items = [
    { name: 'Huffy X27', price: 100, category: 'fitness' },
    { name: 'The Alchemist', price: 15, category: 'books' },
    { name: 'Snuggy', price: 10, category: 'home' },
    { name: 'Macbook Pro', price: 1500, category: 'technology' },
    { name: 'Peloton', price: 2000, category: 'fitness' },
    { name: 'iPad Pro', price: 800, category: 'technology' },
    { name: 'Ember Coffee Mug', price: 80, category: 'home' },
    { name: 'Electric Wine Bottle Opener', price: 20, category: 'home' },
];

// Loop through the items, console.log the price with a concatenated string that let's the user know the total price

// Realized I misread the instruction...
// Challenge is asking for individual prices, not total price
// My Solution (The Wrong Version)

let totalPrice = 0;

for (let key in items) {
    totalPrice += items[key].price;
}

console.log('The total price of all items together is $', totalPrice);

// Create a new array using the map method, that returns all the names of each item

let itemNames = items.map(item => {
    return item.name;
});

console.log('Item names:', itemNames);

// Create a new array using the filter method that returns all the items that are less than 100

let under100DollarItems = items.filter(item => {
    return item.price < 100; // the filtering condition
});

console.log('Items under $100:', under100DollarItems);

// Using the find method loop through the array and return the laptop item setting it to a variable

const laptop = items.find(item => item.name === 'Macbook Pro');

console.log(laptop);

// Chaining the filter and map method together, loop through the items, filter by items that are more than 100, then using the map method, create a new array of the names of those items

let over100DollarItems = items.filter((item) => {
    return item.price > 100;
}).map((over100DollarItem) => {
    return over100DollarItem.name;
});

console.log('Items over $100:', over100DollarItems);

/* Alex's Solution

// MORNING CHALLENGE: ARRAY METHODS

// For Each Method
items.forEach(item => {
  // console.log('The total for the ' + item.name + ' is: $' + item.price);
});
items.forEach(item => {
  // console.log(`The backtic total for the ${item.name} is: $${item.price}`);
});

// Challenge Two: Map Method
const itemNames = items.map(item => {
  return item.name;
});
console.log(itemNames);

const itemNames2 = items.map(item => item.name);
console.log(itemNames2);

// Filter Method
const cheapItems = items.filter(item => {
  return item.price < 100;
});

const cheapItems2 = items.filter(item => item.price < 100);

console.log(cheapItems);
console.log(cheapItems2);

// Find Method
const foundItem = items.find(item => {
  return item.name === 'Macbook Pro';
});
console.log(foundItem);

// Chaining Methods
const expensiveItems = items
  .filter(item => {
    return item.price > 100;
  })
  .map(exp => {
    // debugger;
    return exp.name;
  });

const expensiveItems2 = items
  .filter(item => item.price > 100)
  .map(ex => {
    return { price: ex.price, name: ex.name };
  });

console.log(expensiveItems);
console.log(expensiveItems2);

*/