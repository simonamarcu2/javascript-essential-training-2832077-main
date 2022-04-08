class WaterBootle {
  constructor(
    name,
    volume,
    color,
  ) {
    this.name = name;
    this.volume = volume;
    this.color = color;
  }
  getName() {
    return this.name;
  }
  getVolume() {
    return this.volume;
  }
  setVolume(volume) {
    this.volume = volume;
  }
}

export default WaterBootle;
