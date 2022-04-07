

class PencilBox {
  constructor(
    name,
    volume,
    color,
    pencilNum,
    penLength,
    markerLength,
    lidOpen,

  ) {
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.pencilNum = pencilNum;
    this.pencilType = {
      pen: penLength,
      marker: markerLength,
    };
    this.lidOpen = lidOpen;
  }
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }
  newPencilType(typePen, typeMarker) {
    this.pencilType.pen = typePen;
    this.pencilType.marker = typeMarker;
  }
}

export default PencilBox;
