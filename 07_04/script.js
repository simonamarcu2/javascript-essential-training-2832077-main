/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array 
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */


let learning = ["HTML", "CSS", "JavaScript", "React", "Redux", "Node", "MongoDB", "MySQL"];

const found = learning.find(item => item === "Redux");

// learning.pop();
// learning.unshift(learning.pop());
// learning.sort();
// learning.splice("React", 0);
learning.find(function (value, index) {
  if (index === "Redux") {
    console.log('Deleting this value', value);
    delete learning[4];
  }
});

console.log(learning.pop());

console.log(learning);
console.log(found);
