/**
 * Working with arrays
 * @link https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
 */

let item = "flashlight";

const collection = ["Piggy", item, 5, true];


// Accessing array elements

collection[2] = "camera";
collection[collection.length] = "pen";
collection[9] = "pencil";


console.log(collection[8]); // undefined
console.log(collection[1]); // flashlight
console.log(collection);
