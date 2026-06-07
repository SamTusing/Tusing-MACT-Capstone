import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { feature } from "topojson-client";

function MiniTransitMap() {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = 420;
    const height = 240;

    svg
      .attr("viewBox", `0 0 ${width} ${height}`)
      .style("background", "linear-gradient(180deg, #eef6ff 0%, #f8fbff 100%)")
      .style("border-radius", "16px");

    const projection = d3
      .geoAlbersUsa()
      .translate([width / 2, height / 2])
      .scale(520);

    const path = d3.geoPath().projection(projection);

    const airports = {
      DFW: [-97.0403, 32.8998],
      CLT: [-80.9431, 35.214],
      SEA: [-122.3088, 47.4502],
      PHX: [-112.0116, 33.4342],
      ATL: [-84.4277, 33.6407],
    };

    const routes = [
      ["DFW", "CLT"],
      ["DFW", "SEA"],
      ["DFW", "PHX"],
      ["DFW", "ATL"],
    ];

    function routePath([origin, destination]) {
      const start = projection(airports[origin]);
      const end = projection(airports[destination]);

      if (!start || !end) return "";

      const midX = (start[0] + end[0]) / 2;
      const midY = (start[1] + end[1]) / 2 - 28;

      return `M${start[0]},${start[1]} Q${midX},${midY} ${end[0]},${end[1]}`;
    }

    d3.json("https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json").then((us) => {
      const states = feature(us, us.objects.states);

      svg
        .append("g")
        .selectAll("path")
        .data(states.features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("fill", "#d9e2ec")
        .attr("stroke", "#ffffff")
        .attr("stroke-width", 0.7);

      svg
        .append("g")
        .selectAll("path")
        .data(routes)
        .enter()
        .append("path")
        .attr("d", routePath)
        .attr("fill", "none")
        .attr("stroke", "#1f4e79")
        .attr("stroke-width", 3)
        .attr("stroke-opacity", 0.85)
        .attr("stroke-linecap", "round");

      svg
        .append("g")
        .selectAll("circle")
        .data(Object.entries(airports))
        .enter()
        .append("circle")
        .attr("cx", ([, coords]) => projection(coords)?.[0])
        .attr("cy", ([, coords]) => projection(coords)?.[1])
        .attr("r", ([code]) => (code === "DFW" ? 6 : 4))
        .attr("fill", ([code]) => (code === "DFW" ? "#102a43" : "#e85d75"))
        .attr("stroke", "#ffffff")
        .attr("stroke-width", 1.5);

      svg
        .append("g")
        .selectAll("text")
        .data(Object.entries(airports))
        .enter()
        .append("text")
        .attr("x", ([, coords]) => projection(coords)?.[0] + 7)
        .attr("y", ([, coords]) => projection(coords)?.[1] - 7)
        .attr("font-size", 10)
        .attr("font-weight", 800)
        .attr("fill", "#102a43")
        .attr("stroke", "#ffffff")
        .attr("stroke-width", 3)
        .attr("paint-order", "stroke")
        .text(([code]) => code);
    });
  }, []);

  return <svg ref={svgRef} className="mini-transit-svg"></svg>;
}

export default MiniTransitMap;