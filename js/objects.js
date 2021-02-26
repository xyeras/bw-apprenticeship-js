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