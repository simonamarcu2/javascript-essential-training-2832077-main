/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  newName: function (name) {
    this.name = name;
  },
  newVolume: function (volume) {
    this.volume = volume;
  },
  newColor: function (color) {
    this.color = color;
  },
  newPocketNum: function (pocketNum) {
    this.pocketNum = pocketNum;
  },
};
console.log("The backpack object:", backpack);

backpack.newName("Lunch Backpack");
backpack.newColor("blue");
backpack.newPocketNum(5);
backpack.newVolume(10);
backpack.toggleLid(true);
backpack.newStrapLength(7, 5);
