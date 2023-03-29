import React, { useEffect, useRef } from "react";
import "./styles.scss";

const opts = {
  lineWidth: 4,
  numberOfPoints: 20,
  amplitude: 15,
  spacing: 10,
  margin: 10,
  fixedWidth: 400,
};

const Separator = (props) => {
  const svgRef1 = useRef(null);
  const svgRef2 = useRef(null);


  useEffect(() => {
    // Set up SVG box
    const svg1 = svgRef1.current;
    const svg2 = svgRef2.current;
    const width =
      opts.fixedWidth ||
      (opts.numberOfPoints - 1) * opts.spacing + opts.margin * 2;
    const height = opts.amplitude + opts.margin * 2;

    svg1.style.width = `${width}px`;
    svg1.style.height = `${height}px`;

    svg2.style.width = `${width}px`;
    svg2.style.height = `${height}px`;
    // Generate coordinates
    const points = [];
    for (let i = opts.numberOfPoints; i--; ) points.push(i);

    const animate = () => {
      const coords = points.map((n) => {
        const first = n === 0;
        const last = n === opts.numberOfPoints - 1;
        const x =
          ((width - opts.margin * 2) / (opts.numberOfPoints - 1)) * n +
          opts.margin;
        const y =
          first || last
            ? height / 2
            : (height - opts.amplitude) / 2 + Math.random() * opts.amplitude;

        return { x, y };
      });

      // Draw path
      const path1 = svg1.querySelector("path");
      path1.setAttribute(
        "d",
        `M${coords.map((coord) => `${coord.x},${coord.y}`).join(" L")}`
      );
      const path2 = svg2.querySelector("path");
      path2.setAttribute(
        "d",
        `M${coords.map((coord) => `${coord.x},${coord.y}`).join(" L")}`
      );
      // Style path
      const deviation = Math.random() * (0 - 2) + 2;
      path1.style.opacity = deviation / 0 + 0.2;
      path1.style.strokeWidth = `${opts.lineWidth}px`;
      path2.style.opacity = deviation / 0 + 0.2;
      path2.style.strokeWidth = `${opts.lineWidth}px`;
      // Style glow
      const glow1 = svg1.querySelector("#glow feDropShadow");
      const glow2 = svg2.querySelector("#glow feDropShadow");
      glow1.setAttribute("stdDeviation", deviation);
      glow2.setAttribute("stdDeviation", deviation);



      // Loop
      requestAnimationFrame(animate);
    };

    // Initiate animation
    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="container-separator">
      
        <svg ref={svgRef1}>
            <defs>
              <filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
                {/* <feDropShadow dx="0" dy="0" stdDeviation="3"></feDropShadow> */}
              </filter>
            </defs>
            <path style={{ filter: "url(#glow)" }} d="M10,0 L100,0" />
          </svg>
          <h2>{props.title}</h2>
          <svg ref={svgRef2}>
            <defs>
              <filter id="glow" x="100%" y="-100%" width="300%" height="300%">
                <feDropShadow dx="0" dy="0" stdDeviation="3"></feDropShadow>
              </filter>
            </defs>
            <path style={{ filter: "url(#glow)" }} d="M10,0 L100,0" />
          </svg>
        </div>
    
   
  );
};

export default Separator;
