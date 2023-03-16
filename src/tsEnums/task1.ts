enum Color {
  red = "#FF0000",
  green = "#00FF00",
  blue = "#0000FF",
}

const getColorHexCode = (color: Color): Color => color;

console.log(getColorHexCode(Color.green));
