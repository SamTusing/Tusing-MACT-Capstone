import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { feature } from "topojson-client";

const cities = [
  { id: "dallas", name: "Dallas, TX", travelers: 5, lon: -96.797, lat: 32.7767, status: "active" },
  { id: "charlotte", name: "Charlotte, NC", travelers: 3, lon: -80.8431, lat: 35.2271, status: "active" },
  { id: "nashville", name: "Nashville, TN", travelers: 2, lon: -86.7816, lat: 36.1627, status: "active" },
  { id: "phoenix", name: "Phoenix, AZ", travelers: 1, lon: -112.074, lat: 33.4484, status: "upcoming" },
  { id: "seattle", name: "Seattle, WA", travelers: 2, lon: -122.3321, lat: 47.6062, status: "active" },
  { id: "madison", name: "Madison, WI", travelers: 1, lon: -89.4012, lat: 43.0731, status: "upcoming" },
  { id: "boston", name: "Boston, MA", travelers: 3, lon: -71.0589, lat: 42.3601, status: "active" },
  { id: "tampa", name: "Tampa, FL", travelers: 1, lon: -82.4572, lat: 27.9506, status: "completed" },
];

function TravelerHubMap() {
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

        const hub = cities.find((city) => city.id === "dallas");

        const routes = cities
          .filter((city) => city.id !== "dallas")
          .map((city) => ({
            from: hub,
            to: city,
          }));

        function curvedRoute(route) {
          const start = projection([route.from.lon, route.from.lat]);
          const end = projection([route.to.lon, route.to.lat]);

          if (!start || !end) return "";

          const midX = (start[0] + end[0]) / 2;
          const midY = (start[1] + end[1]) / 2 - 55;

          return `M${start[0]},${start[1]} Q${midX},${midY} ${end[0]},${end[1]}`;
        }

        svg
          .append("g")
          .attr("class", "hub-map-states-layer")
          .selectAll("path")
          .data(states.features)
          .enter()
          .append("path")
          .attr("class", "hub-map-state")
          .attr("d", path);

        svg
          .append("g")
          .attr("class", "hub-map-routes-layer")
          .selectAll("path")
          .data(routes)
          .enter()
          .append("path")
          .attr("class", "hub-map-route")
          .attr("d", curvedRoute);

        const cityGroups = svg
          .append("g")
          .attr("class", "hub-map-cities-layer")
          .selectAll("g")
          .data(cities)
          .enter()
          .append("g")
          .attr("class", "hub-city-group")
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
                <strong>${d.name}</strong><br/>
                ${d.travelers} traveler${d.travelers === 1 ? "" : "s"}<br/>
                Status: ${d.status}
              `);
          })
          .on("mouseleave", () => {
            tooltip.style("opacity", 0);
          });

        cityGroups
          .append("circle")
          .attr("class", (d) => `hub-city-dot ${d.status}`)
          .attr("r", (d) => (d.id === "dallas" ? 13 : 9));

        cityGroups
          .append("text")
          .attr("class", "hub-city-label")
          .attr("x", 14)
          .attr("y", -10)
          .text((d) => d.name);

        cityGroups
          .append("text")
          .attr("class", "hub-city-count")
          .attr("x", 14)
          .attr("y", 7)
          .text((d) => `${d.travelers} traveler${d.travelers === 1 ? "" : "s"}`);
      }
    );
  }, []);

  return (
    <div className="hub-map-wrapper">
      <svg ref={svgRef} className="hub-d3-map"></svg>
      <div ref={tooltipRef} className="hub-map-tooltip"></div>
    </div>
  );
}

export default TravelerHubMap;