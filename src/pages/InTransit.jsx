import React, { useEffect, useMemo, useRef, useState } from "react";
import * as d3 from "d3";
import { feature } from "topojson-client";
import "../styles/InTransit.css";
import { Link } from "react-router-dom";

const airports = {
  ATL: { name: "Atlanta", lat: 33.6407, lon: -84.4277 },
  BDL: { name: "Hartford", lat: 41.9389, lon: -72.6832 },
  BHM: { name: "Birmingham", lat: 33.5629, lon: -86.7535 },
  BNA: { name: "Nashville", lat: 36.1263, lon: -86.6774 },
  BUF: { name: "Buffalo", lat: 42.9405, lon: -78.7322 },
  BWI: { name: "Baltimore", lat: 39.1754, lon: -76.6684 },
  CLT: { name: "Charlotte", lat: 35.214, lon: -80.9431 },
  COS: { name: "Colorado Springs", lat: 38.8058, lon: -104.7008 },
  DAL: { name: "Dallas Love Field", lat: 32.8471, lon: -96.8518 },
  DAY: { name: "Dayton", lat: 39.9024, lon: -84.2194 },
  DEN: { name: "Denver", lat: 39.8561, lon: -104.6737 },
  DFW: { name: "Dallas/Fort Worth", lat: 32.8998, lon: -97.0403 },
  DTW: { name: "Detroit", lat: 42.2162, lon: -83.3554 },
  EVV: { name: "Evansville", lat: 38.0379, lon: -87.5306 },
  FSD: { name: "Sioux Falls", lat: 43.582, lon: -96.7419 },
  GNV: { name: "Gainesville", lat: 29.6901, lon: -82.2718 },
  GSO: { name: "Greensboro", lat: 36.0978, lon: -79.9373 },
  GSP: { name: "Greenville-Spartanburg", lat: 34.8957, lon: -82.2189 },
  IAD: { name: "Washington Dulles", lat: 38.9531, lon: -77.4565 },
  IDA: { name: "Idaho Falls", lat: 43.5146, lon: -112.0708 },
  JAN: { name: "Jackson", lat: 32.3112, lon: -90.0759 },
  LEX: { name: "Lexington", lat: 38.0365, lon: -84.6059 },
  LIT: { name: "Little Rock", lat: 34.7294, lon: -92.2243 },
  MCO: { name: "Orlando", lat: 28.4312, lon: -81.3081 },
  MOB: { name: "Mobile", lat: 30.6912, lon: -88.2428 },
  MSN: { name: "Madison", lat: 43.1399, lon: -89.3375 },
  ORD: { name: "Chicago O'Hare", lat: 41.9742, lon: -87.9073 },
  OWB: { name: "Owensboro", lat: 37.7401, lon: -87.1668 },
  PDX: { name: "Portland", lat: 45.5898, lon: -122.5951 },
  PHX: { name: "Phoenix", lat: 33.4342, lon: -112.0116 },
  RAP: { name: "Rapid City", lat: 44.0453, lon: -103.0574 },
  RDU: { name: "Raleigh-Durham", lat: 35.8801, lon: -78.788 },
  RIC: { name: "Richmond", lat: 37.5052, lon: -77.3197 },
  SAT: { name: "San Antonio", lat: 29.5337, lon: -98.4698 },
  SEA: { name: "Seattle", lat: 47.4502, lon: -122.3088 },
  SMF: { name: "Sacramento", lat: 38.6954, lon: -121.5908 },
  SNA: { name: "Orange County", lat: 33.6757, lon: -117.8682 },
  STL: { name: "St. Louis", lat: 38.7487, lon: -90.37 },
  TLH: { name: "Tallahassee", lat: 30.3965, lon: -84.3503 },
  TPA: { name: "Tampa", lat: 27.9755, lon: -82.5332 },
};

const routeText = `
  CLT to DFW (9 times), DFW to CLT (9 times), BHM to DFW (5 times), DFW to BHM (5 times),
  DFW to TPA (5 times), TPA to DFW (5 times), DFW to DTW (4 times), DTW to DFW (4 times),
  BDL to DFW (3 times), DFW to BDL (3 times), BNA to DFW (3 times), DFW to BNA (3 times),
  DAY to DFW (3 times), DFW to DAY (3 times), DFW to GNV (3 times), GNV to DFW (3 times),
  PHX to DFW (3 times), DFW to PHX (2 times), SNA to DFW (3 times), SNA to DFW (3 times),
  BUF to DFW (2 times), DFW to BUF (2 times), DFW to GSO (2 times), GSO to DFW (2 times),
  DFW to JAN (2 times), JAN to DFW (once), LEX to DFW (2 times), DFW to LEX (2 times),
  DFW to MOB (2 times), MOB to DFW (2 times), MSN to DFW (2 times), DFW to MSN (2 times),
  SAT to DFW (2 times), DFW to SAT (2 times), ATL to CLT (once), DAL to MCO (once),
  MCO to DAL (once), DEN to DFW (once), DFW to BWI (once), BWI to DFW (once),
  DFW to COS (once), DFW to FSD (once), FSD to DFW (once), DFW to GSP (once),
  GSP to DFW (once), DFW to IAD (once), IAD to DFW (once), DFW to LIT (once),
  LIT to DFW (once), DFW to MCO (once), MCO to DFW (once), DFW to ORD (once),
  DFW to RAP (once), RAP to DFW (once), DFW to RDU (once), RDU to DFW (once),
  RIC to DFW (once), DFW to RIC (once), DFW to SEA (once), SEA to DFW (once),
  DFW to SMF (once), SMF to DFW (once), DFW to STL (once), STL to DFW (once),
  DFW to TLH (once), TLH to DFW (once), EVV to DFW (once), ORD to OWB (once),
  PDX to PHX (once), DFW to PDX (once), IDA to DFW (once), DFW to IDA (once)
`;

const storyCopy = {
  all: "DFW dominates the travel system. Most routes either begin or end there, turning Dallas/Fort Worth into the center of a repeated work-travel pattern.",
  top: "The most repeated routes reveal which cities became recurring anchors rather than one-time destinations. CLT, BHM, and TPA stand out as repeated travel loops.",
  longest: "The longest route, DFW to SEA, stretches the map to the Pacific Northwest and shows the outer edge of this travel network.",
  shortest: "The shortest distance route, ATL to CLT, is a compact segment compared with the larger DFW-centered network.",
};

const spaceMetrics = [
  { key: "earth", label: "Completed laps", value: 5.3, decimals: 1, total: "5.3" },
  { key: "moon", label: "Distance traveled", value: 0.5, decimals: 1, total: "0.5" },
  { key: "sun", label: "Orbit completed", value: 0.05, decimals: 2, total: "0.05" },
];

function haversineMiles(lat1, lon1, lat2, lon2) {
  const radius = 3958.8;
  const toRad = value => (value * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;

  return 2 * radius * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function parseRoutes(text) {
  const matches = [...text.matchAll(/([A-Z]{3}) to ([A-Z]{3}) \((once|\d+ times?)\)/g)];
  const routeMap = new Map();

  matches.forEach(match => {
    const origin = match[1];
    const destination = match[2];
    const count = match[3] === "once" ? 1 : Number(match[3].split(" ")[0]);
    const key = `${origin}-${destination}`;

    if (!routeMap.has(key)) {
      routeMap.set(key, { origin, destination, count: 0 });
    }

    routeMap.get(key).count += count;
  });

  return Array.from(routeMap.values()).map(route => {
    const originAirport = airports[route.origin];
    const destinationAirport = airports[route.destination];

    return {
      ...route,
      origin_lat: originAirport.lat,
      origin_lon: originAirport.lon,
      dest_lat: destinationAirport.lat,
      dest_lon: destinationAirport.lon,
      origin_name: originAirport.name,
      destination_name: destinationAirport.name,
      estimatedMiles: Math.round(
        haversineMiles(
          originAirport.lat,
          originAirport.lon,
          destinationAirport.lat,
          destinationAirport.lon
        )
      ),
    };
  });
}

function getAirportVisits(data) {
  const airportMap = new Map();

  data.forEach(route => {
    [
      {
        code: route.origin,
        lat: route.origin_lat,
        lon: route.origin_lon,
        name: route.origin_name,
      },
      {
        code: route.destination,
        lat: route.dest_lat,
        lon: route.dest_lon,
        name: route.destination_name,
      },
    ].forEach(airport => {
      if (!airportMap.has(airport.code)) {
        airportMap.set(airport.code, {
          ...airport,
          visits: 0,
          home: airport.code === "DFW",
        });
      }

      airportMap.get(airport.code).visits += route.count;
    });
  });

  return Array.from(airportMap.values());
}

function filterRoutes(routes, filter) {
  if (filter === "top") return routes.filter(route => route.count >= 5);
  if (filter === "longest") {
    return routes.filter(route => route.origin === "DFW" && route.destination === "SEA");
  }
  if (filter === "shortest") {
    return routes.filter(route => route.origin === "ATL" && route.destination === "CLT");
  }
  return routes;
}

export default function InTransit() {
  const svgRef = useRef(null);
  const tooltipRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [counterKey, setCounterKey] = useState(0);
  const [counters, setCounters] = useState({ earth: "0.0", moon: "0.0", sun: "0.00" });

  const routes = useMemo(() => parseRoutes(routeText), []);
  const filteredRoutes = useMemo(() => filterRoutes(routes, activeFilter), [routes, activeFilter]);
  const airportCount = useMemo(() => getAirportVisits(routes).length, [routes]);
  const routeSegments = useMemo(() => d3.sum(routes, route => route.count), [routes]);

  useEffect(() => {
    let frameId;
    const duration = 10600;
    const startTime = performance.now();

    function updateCounters(now) {
      const progress = Math.min((now - startTime) / duration, 1);

      setCounters({
        earth: (progress * 5.3).toFixed(1),
        moon: (progress * 0.5).toFixed(1),
        sun: (progress * 0.05).toFixed(2),
      });

      if (progress < 1) {
        frameId = requestAnimationFrame(updateCounters);
      }
    }

    frameId = requestAnimationFrame(updateCounters);
    return () => cancelAnimationFrame(frameId);
  }, [counterKey]);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const tooltip = d3.select(tooltipRef.current);
    const width = 1000;
    const height = 650;

    svg.selectAll("*").remove();
    svg.attr("viewBox", `0 0 ${width} ${height}`);

    const projection = d3.geoAlbersUsa().translate([width / 2, height / 2]).scale(1250);
    const geoPath = d3.geoPath().projection(projection);

    const mapGroup = svg.append("g").attr("class", "map-layer");
    const routeGroup = svg.append("g").attr("class", "routes");
    const movingPlaneGroup = svg.append("g").attr("class", "moving-planes");
    const airportGroup = svg.append("g").attr("class", "airports");
    const labelGroup = svg.append("g").attr("class", "labels");

    const maxCount = d3.max(routes, route => route.count) || 1;
    const maxVisits = d3.max(getAirportVisits(routes), airport => airport.visits) || 1;
    const strokeScale = d3.scaleLinear().domain([1, maxCount]).range([1.3, 8]);
    const nodeScale = d3.scaleSqrt().domain([1, maxVisits]).range([4, 20]);

    function curvedRoute(route) {
      const start = projection([route.origin_lon, route.origin_lat]);
      const end = projection([route.dest_lon, route.dest_lat]);
      if (!start || !end) return null;

      const dx = end[0] - start[0];
      const dy = end[1] - start[1];
      const distance = Math.sqrt(dx * dx + dy * dy);
      const curve = Math.min(90, Math.max(25, distance * 0.22));
      const midX = (start[0] + end[0]) / 2;
      const midY = (start[1] + end[1]) / 2 - curve;

      return `M${start[0]},${start[1]} Q${midX},${midY} ${end[0]},${end[1]}`;
    }

    function showTooltip(event, html) {
      tooltip
        .style("opacity", 1)
        .style("left", `${event.pageX - 180}px`)
        .style("top", `${event.pageY}px`)
        .html(html);
    }

    function hideTooltip() {
      tooltip.style("opacity", 0);
    }

    function animateTopRoutePlanes(data) {
      movingPlaneGroup.selectAll("*").remove();

      if (activeFilter !== "top") return;

      data.forEach((route, index) => {
        const routePath = curvedRoute(route);
        if (!routePath) return;

        const pathId = `motion-path-${route.origin}-${route.destination}-${index}`;

        movingPlaneGroup
          .append("path")
          .attr("id", pathId)
          .attr("d", routePath)
          .attr("fill", "none")
          .attr("stroke", "none");

        const plane = movingPlaneGroup
          .append("text")
          .attr("font-size", 22)
          .attr("dominant-baseline", "middle")
          .attr("text-anchor", "middle")
          .text("✈️");

        const motion = plane
          .append("animateMotion")
          .attr("dur", "2.4s")
          .attr("begin", `${index * 0.25}s`)
          .attr("repeatCount", route.count)
          .attr("rotate", "auto")
          .attr("keyPoints", "0;1;0")
          .attr("keyTimes", "0;0.5;1")
          .attr("calcMode", "linear");

        motion.append("mpath").attr("href", `#${pathId}`);

        const start = projection([route.origin_lon, route.origin_lat]);
        if (start) {
          movingPlaneGroup
            .append("text")
            .attr("x", start[0])
            .attr("y", start[1] - 22 - strokeScale(route.count))
            .attr("class", "airport-label")
            .attr("text-anchor", "middle")
            .text(`${route.count}x`);
        }
      });
    }

    async function drawMap() {
      const us = await d3.json("https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json");
      const states = feature(us, us.objects.states);

      mapGroup
        .selectAll("path")
        .data(states.features)
        .enter()
        .append("path")
        .attr("class", "state")
        .attr("d", geoPath);

      routeGroup
        .selectAll("path")
        .data(filteredRoutes, route => `${route.origin}-${route.destination}`)
        .enter()
        .append("path")
        .attr("class", route => (route.count >= 5 ? "route top-route" : "route"))
        .attr("d", curvedRoute)
        .attr("stroke-width", route => strokeScale(route.count))
        .style("opacity", 0)
        .on("mousemove", (event, route) => {
          showTooltip(
            event,
            `<strong>${route.origin} → ${route.destination}</strong><br>${route.origin_name} to ${route.destination_name}<br><strong>${route.count}</strong> flight${route.count === 1 ? "" : "s"}<br>Approx. ${route.estimatedMiles.toLocaleString()} miles`
          );
        })
        .on("mouseleave", hideTooltip)
        .each(function (_, index) {
          const length = this.getTotalLength();
          d3.select(this)
            .attr("stroke-dasharray", `${length} ${length}`)
            .attr("stroke-dashoffset", length)
            .transition()
            .duration(1000)
            .delay(index * 35)
            .attr("stroke-dashoffset", 0)
            .style("opacity", 1)
            .on("end", (_, finishedIndex) => {
              if (activeFilter === "top" && finishedIndex === filteredRoutes.length - 1) {
                animateTopRoutePlanes(filteredRoutes);
              }
            });
        });

      const airportVisits = getAirportVisits(filteredRoutes);

      airportGroup
        .selectAll("circle")
        .data(airportVisits, airport => airport.code)
        .enter()
        .append("circle")
        .attr("class", airport => (airport.home ? "airport home" : "airport"))
        .attr("cx", airport => projection([airport.lon, airport.lat])?.[0])
        .attr("cy", airport => projection([airport.lon, airport.lat])?.[1])
        .attr("r", 0)
        .on("mousemove", (event, airport) => {
          showTooltip(
            event,
            `<strong>${airport.code}</strong><br>${airport.name}<br>${airport.visits} total route touchpoint${airport.visits === 1 ? "" : "s"}`
          );
        })
        .on("mouseleave", hideTooltip)
        .transition()
        .duration(650)
        .attr("r", airport => nodeScale(airport.visits));

      labelGroup
        .selectAll("text")
        .data(airportVisits, airport => airport.code)
        .enter()
        .append("text")
        .attr("class", "airport-label")
        .attr("x", airport => projection([airport.lon, airport.lat])?.[0] + 10)
        .attr("y", airport => projection([airport.lon, airport.lat])?.[1] - 10)
        .text(airport => airport.code)
        .style("opacity", 0)
        .transition()
        .duration(500)
        .style("opacity", 1);
    }

    drawMap();

    return () => {
      svg.selectAll("*").interrupt();
      tooltip.style("opacity", 0);
    };
  }, [routes, filteredRoutes, activeFilter]);

  function restartSpaceAnimations() {
    setCounters({ earth: "0.0", moon: "0.0", sun: "0.00" });
    setCounterKey(previous => previous + 1);
  }

  return (
    <div className="in-transit-page">
      <header className="in-transit-header">
        <Link to="/sam-profile" className="page-title-link">
  <h1>Sam's In Transit</h1>
</Link>
        <p>
          A narrative visualization of flight data, routine, and identity. This map shows not just where I traveled,
          but how repeated movement created patterns of work, distance, rhythm, and temporary homes.
        </p>
      </header>

      <main className="in-transit-main">
        <aside className="in-transit-sidebar">
          <section className="story-card">
            <h2>The Hidden Shape of Movement</h2>
            <p>{storyCopy[activeFilter]}</p>
          </section>

          <section className="stats">
            <div className="stat"><span>Total Flight Time</span><strong>374 hrs</strong></div>
            <div className="stat"><span>Total Routes</span><strong>73</strong></div>
            <div className="stat"><span>Airports</span><strong>{airportCount}</strong></div>
            <div className="stat"><span>Route Segments</span><strong>{routeSegments}</strong></div>
          </section>

          <section className="story-card">
            <h2>Route Extremes</h2>
            <ul>
              <li><strong>Shortest distance:</strong> ATL → CLT, 227 miles</li>
              <li><strong>Longest distance:</strong> DFW → SEA, 1,657 miles</li>
              <li><strong>Shortest time:</strong> DFW → SAT, 1 hour</li>
              <li><strong>Longest time:</strong> CLT → DFW, 4 hours 32 minutes</li>
            </ul>
          </section>

          <section className="story-card">
            <h2>Explore the Story</h2>
            <p>Use the buttons to change the narrative lens. Route thickness shows how often each route was flown.</p>
            <div className="filters">
              <button className={activeFilter === "all" ? "active" : ""} onClick={() => setActiveFilter("all")}>All Routes</button>
              <button className={activeFilter === "top" ? "active" : ""} onClick={() => setActiveFilter("top")}>Most Repeated Routes</button>
              <button className={activeFilter === "longest" ? "active" : ""} onClick={() => setActiveFilter("longest")}>Longest Flight Route</button>
              <button className={activeFilter === "shortest" ? "active" : ""} onClick={() => setActiveFilter("shortest")}>Shortest Flight Route</button>
            </div>
          </section>
        </aside>

        <section className="visualization-panel">
          <svg ref={svgRef} className="flight-map" />
          <div ref={tooltipRef} className="tooltip" />

          <section className="space-section">
            <h2>Measuring Distance Through Space</h2>
            <p>
              Large flight totals are hard to understand as raw miles, so this section translates distance into three
              cosmic comparisons: circling Earth, traveling toward the Moon, and orbiting the Sun.
            </p>
            <button className="restart-button" onClick={restartSpaceAnimations}>Restart Animations</button>

            <div className="orbit-grid" key={counterKey}>
              <article className="orbit-card">
                <h3>5.3 Times Around Earth</h3>
                <p className="description">My total flight miles equal more than five full circles around the planet.</p>
                <div className="orbit-visual">
                  <div className="orbit-fill" />
                  <div className="orbit" />
                  <div className="center-body earth">🌎</div>
                  <div className="orbit-plane plane-earth animate">✈️</div>
                </div>
                <p className="counter">Completed laps: <span>{counters.earth}</span> / 5.3</p>
                <p className="caption">This turns accumulated mileage into planetary motion.</p>
              </article>

              <article className="orbit-card">
                <h3>0.5 Times to the Moon</h3>
                <p className="description">My total flight miles are equal to roughly half the distance from Earth to the Moon.</p>
                <div className="orbit-visual">
                  <div className="orbit-fill" />
                  <div className="orbit" />
                  <div className="center-body moon">🌕</div>
                  <div className="orbit-plane plane-moon animate">✈️</div>
                </div>
                <p className="counter">Distance traveled: <span>{counters.moon}</span> / 0.5</p>
                <p className="caption">This reframes flight distance as a partial journey into deep space.</p>
              </article>

              <article className="orbit-card">
                <h3>0.05 Times Around the Sun</h3>
                <p className="description">My total flight miles equal a small but visible fraction of one orbit around the Sun.</p>
                <div className="orbit-visual">
                  <div className="orbit-fill" />
                  <div className="orbit" />
                  <div className="center-body sun">☀️</div>
                  <div className="orbit-plane plane-sun animate">✈️</div>
                </div>
                <p className="counter">Orbit completed: <span>{counters.sun}</span> / 0.05</p>
                <p className="caption">Even a tiny solar fraction makes repeated travel feel vast.</p>
              </article>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
