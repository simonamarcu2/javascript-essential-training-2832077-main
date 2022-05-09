/**
 * Working with array methods
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods
 */

let backpackContents = ["pig", "headlamp", "pen"];

// backpackContents.push("pencil", 5);
// backpackContents.shift();
// backpackContents.pop();

// console.log(backpackContents.join(","));
// console.log(backpackContents.reverse());
// console.log(backpackContents.sort());
// console.log(backpackContents.sort().reverse());
// console.log(backpackContents.sort().reverse().join(","));


// backpackContents.forEach(function (item) {
//   item = `<li>${item}</li>`;
//   console.log(item);
// });

// console.log(backpackContents);


let longItems = backpackContents.find(function (item) {
  if (item.length >= 5) {
    return item;
  }
});

console.log("longItems:", longItems);
console.log(backpackContents)
