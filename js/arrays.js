// =========== ARRAYS NOTES ============

// ========= Strings Properties and Methonds

let firstString = 'Hello World';
firstString = 'Hello Universe';
let wordsString = 'meow, oomf, yikes, whoa';

console.log(firstString);

console.log(firstString.length);

console.log(firstString.indexOf('o'));

// used for databases
// removes the outer white space
console.log(firstString.trim());

console.log(firstString.toUpperCase());

console.log(firstString.toLowerCase());

console.log(firstString.substring(0,5));

console.log(firstString.substring(6,14));

console.log(firstString.substring(6,18));

console.log(firstString.split(' '));

// removes the comma and the space after
console.log(wordsString.split(', '));

console.log(wordsString.toUpperCase().split(', '));

// ======== Arrays

let firstArray = new Array(1, 2, 3, 4);
console.log('first array: ', firstArray);

let coolerArray = [10, 20, 30, 40];
console.log('cooler array: ', coolerArray);

let fruits = ['Apples', 'Oranges', 'Plums', 'Jackfruit'];
console.log(fruits);
console.log(fruits[1]);
console.log('I like ' + fruits[1] + ' and ' + fruits[2]);

fruits.push('Mangoes', 'Peaches');
console.log(fruits);

fruits.pop();
console.log(fruits);

// pushes item to front of array
fruits.unshift('Tacos');
console.log(fruits);

// removing the front item
fruits.shift();
console.log(fruits);

console.log('How many items in my fruits array?', fruits.length);

let emptyArray = [];
console.log(emptyArray.length);

if (emptyArray.length != 0) {
    console.log('No items in empty array');
}

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

let myTopMovies = [
"Final Fantasy VII: The Advent Children", 
"Violet Evergarden: The Movie", 
"Hetalia: Axis Powers - Paint It, White", 
"Howl's Moving Castle", 
"Spirited Away"
];

for (let i = 0 ; i < myTopMovies.length; i++) {
    console.log(myTopMovies[i].toUpperCase());
}