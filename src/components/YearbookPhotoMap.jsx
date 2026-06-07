import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { feature } from "topojson-client";

const photoCities = [
  { city: "Dallas, TX", lat: 32.7767, lon: -96.797, count: 12 },
  { city: "Nashville, TN", lat: 36.1627, lon: -86.7816, count: 9 },
  { city: "Phoenix, AZ", lat: 33.4484, lon: -112.074, count: 7 },
  { city: "Seattle, WA", lat: 47.6062, lon: -122.3321, count: 8 },
  { city: "Charlotte, NC", lat: 35.2271, lon: -80.8431, count: 10 },
  { city: "Madison, WI", lat: 43.0731, lon: -89.4012, count: 6 },
  { city: "New Orleans, LA", lat: 29.9511, lon: -90.0715, count: 5 },
  { city: "Denver, CO", lat: 39.7392, lon: -104.9903, count: 6 },
];

function YearbookPhotoMap({ onCitySelect }) {
  const svgRef = useRef(null);
  const tooltipRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const tooltip = d3.select(tooltipRef.current);

    svg.selectAll("*").remove();

    const width = 1000;
    const height = 560;

    svg.attr("viewBox", `0 0 ${width} ${height}`);

    const projection = d3
      .geoAlbersUsa()
      .translate([width / 2, height / 2])
      .scale(1150);

    const path = d3.geoPath().projection(projection);

    d3.json("https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json").then(
      (us) => {
        const states = feature(us, us.objects.states);

        svg
          .append("g")
          .selectAll("path")
          .data(states.features)
          .enter()
          .append("path")
          .attr("class", "photo-map-state")
          .attr("d", path);

        const cityGroups = svg
          .append("g")
          .selectAll("g")
          .data(photoCities)
          .enter()
          .append("g")
          .attr("class", "photo-map-city")
          .attr("transform", (d) => {
            const coords = projection([d.lon, d.lat]);
            return coords ? `translate(${coords[0]}, ${coords[1]})` : "";
          })
          .on("mousemove", (event, d) => {
            tooltip
              .style("opacity", 1)
              .style("left", `${event.offsetX + 18}px`)
              .style("top", `${event.offsetY + 18}px`)
              .html(`
                <strong>${d.city}</strong><br/>
                ${d.count} submitted photo${d.count === 1 ? "" : "s"}<br/>
                Click to view memories
              `);
          })
          .on("mouseleave", () => {
            tooltip.style("opacity", 0);
          })
          .on("click", (_, d) => {
            onCitySelect(d);
          });

        cityGroups
          .append("circle")
          .attr("class", "photo-map-dot")
          .attr("r", (d) => Math.max(8, Math.min(18, d.count + 4)));

        cityGroups
          .append("text")
          .attr("class", "photo-map-count")
          .attr("text-anchor", "middle")
          .attr("dy", 4)
          .text((d) => d.count);

        cityGroups
          .append("text")
          .attr("class", "photo-map-label")
          .attr("x", 18)
          .attr("y", -10)
          .text((d) => d.city);
      }
    );
  }, [onCitySelect]);

  return (
    <div className="photo-map-wrapper">
      <svg ref={svgRef} className="yearbook-photo-map"></svg>
      <div ref={tooltipRef} className="photo-map-tooltip"></div>
    </div>
  );
}

export default YearbookPhotoMap;