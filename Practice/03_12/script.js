/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import Backpack from "./Backpack.js";
import LunchBox from "./LunchBox.js";
import Pencil from "./PencilBox.js";
import Water from "./Water.js";

const everydayPack = new Backpack(
  "Everyday Backpack Simy",
  30,
  "green",
  25,
  30,
  31,
  true,
);

const everydayLunchBox = new LunchBox(
  "Everyday LunchBox Simy",
  30,
  50,
  10,
  "plastic",
);

const everydayPencil = new Pencil(
  "Everyday Pencil Simy",
  5,
  "blue",
  25,
  10,
  12,
  false,
);

const everydayWaterBootle = new Water(
  "Everyday WaterBottle Simy",
  1000,
  "blue",
);

console.log("The everydayPack object:", everydayPack);
console.log("The LunchBox object:", everydayLunchBox);
console.log("The Pencil object:", everydayPencil);
console.log("The WaterBottle object:", everydayWaterBootle);
