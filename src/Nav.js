import React from "react";

function Navold() {
  return <div className="d-flex justify-content-between text-center">
      <div><div className="bg-warning rounded-circle" style={{ width: "100px", height: "100px" }}></div><h4>Menu</h4></div>
      <div><div className="ml-30 py-auto" style={{ width: "0",
  height: "0",
  'borderLeft': "60px solid transparent",
  'borderRight': "60px solid transparent",
  'borderBottom': "80px solid #007bff" }}></div><h4>Home</h4></div>
  <div><div className="bg-danger" style={{ width: "100px", height: "100px" }}></div><h4>Contact</h4></div>
  </div>;
}

function draw(ctx, location) {
  ctx.rect(0,0,50,50);
  ctx.fillStyle = 'deepskyblue';
}


function Nav() {
  const canvasRef = React.useRef(null)
  return(
    <div id="navcontainer">
      <canvas
      ref={canvasRef}
      width="300px"
      height="100px"
      onClick={e => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        draw(ctx, { x: e.clientX, y: e.clientY })
      }}
    />
    </div>
  )
}

export default Nav;

/*
<g id="cir" onclick="shuffle(cir)">
          <circle style="fill: rgba(255, 82, 82)" id="circle" r="19" />
          <text x="0" y="50" font-size="10">Projecten</text>
        </g>

        <g id="tri" onclick="shuffle(tri)">
          <polygon id="triangle" style="fill: rgb(0, 176, 255)" points="25,10 37,45 0,40" class="triangle"
            transform="scale(1.2)" />
          <text x="0" y="50" font-size="10">Index</text>
        </g>

        <g id="rec" x="50" y="6" transform="rotate(-12,70,21)" onclick="shuffle(rec)">
          <rect id="rectangle" style="fill: rgb(255, 235, 59)" width="35" height="35" />
          <text x="5" y="45" font-size="10">Index</text>
        </g>

*/