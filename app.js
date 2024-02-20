// d3.select("p").style('color','brown')
const canvas = d3.select(".canva");

const svg = canvas.append("svg").attr("width", 500).attr("height", 200);

svg
  .append("circle")
  .attr("cx", 50)
  .attr("cy", 50)
  .attr("r", 50)
  .attr("fill", "blue");
