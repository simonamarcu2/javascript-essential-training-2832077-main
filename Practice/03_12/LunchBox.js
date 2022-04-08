class LunchBox {
  constructor(
    width,
    height,
    depth,
    material
  ) {
    this.width = width;
    this.height = height;
    this.depth = depth;
    this.material = material;
  }
  getVolume() {
    return this.width * this.height * this.depth;
  }
  getSurfaceArea() {
    return 2 * (this.width * this.height + this.width * this.depth + this.height * this.depth);
  }
  getMaterial() {
    return this.material;
  }
}

export default LunchBox;
