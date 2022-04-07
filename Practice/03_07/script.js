/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const shelfBox = {
  name: "Shelf Box",
  volume: 30,
  color: "white",
  shelfNum: 4,
  shelfHeight: {
    top: 20,
    bottom: 20,
  },
  shelfWidth: {
    left: 20,
    right: 20,
  },
  mediaObjects: {
    media1: {
      name: "Media 1",
      type: "CD",
      volume: 10,
      color: "black",
    },
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
};

console.log("The shelfBox object:", shelfBox);

console.log("The shelfNum value:", shelfBox.shelfNum);
