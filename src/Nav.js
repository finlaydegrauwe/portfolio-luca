import React, { useState, useEffect, useRef } from "react";

function Nav() {
  const [shuffleState, setShuffleState] = useState(0);
  const [heightSVG, setHeightSVG] = useState(0);
  const [widthSVG, setWidthSVG] = useState(0);
  const refSVG = useRef(null);
  let circleLoc = "translate(40,100),scale(1.7)";
  let triangleLoc = "translate(200,100),scale(1.7)";
  let squareLoc = "translate(120,100),scale(1.7)";
  let scale = 1.9;
  const top = heightSVG / 10;
  let botl = heightSVG * 0.5;
  let botr = heightSVG * 0.5;
  const left = widthSVG / 10;
  const mid = widthSVG / 2.4;
  let right = widthSVG * 0.7
  if (widthSVG < 240) {
    botl = heightSVG * 0.4;
    botr = heightSVG * 0.65;
    right = widthSVG * 0.55;
  }
  if (widthSVG > 400) {
    scale = 2.2;
  }

  useEffect(() => {
    setHeightSVG(refSVG.current.clientHeight);
    setWidthSVG(refSVG.current.clientWidth);
  },[]);
  
  if (shuffleState%3 === 0) {
    circleLoc = "translate("+left+","+botl+"),scale("+scale+"),rotate(-3)";
    triangleLoc = "translate("+right+","+botr+"),scale("+scale+"),rotate(7)";
    squareLoc = "translate("+mid+","+top+"),scale("+scale+"),rotate(-5)";
    console.log("projecten");
  } else if (shuffleState%3 === 1) {
    circleLoc = "translate("+mid+","+top+"),scale("+scale+"),rotate(4)";
    triangleLoc = "translate("+left+","+botl+"),scale("+scale+"),rotate(-3)";
    squareLoc = "translate("+right+","+botr+"),scale("+scale+"),rotate(6)";
    console.log("contact");
  } else if (shuffleState%3 === 2) {
    circleLoc = "translate("+right+","+botr+"),scale("+scale+"),rotate(-2)";
    triangleLoc = "translate("+mid+","+top+"),scale("+scale+"),rotate(3)";
    squareLoc = "translate("+left+","+botl+"),scale("+scale+"),rotate(-3)";
    console.log("over mij");
  }
  return(
    <svg ref={refSVG} fontWeight="bold">
        <g id="cir" transform={circleLoc} onClick={() => setShuffleState(0)}>
          <circle fill="rgba(255, 82, 82)" id="circle" cx="19" cy="19" r="19"></circle>
          <text x="-3" y="50" fontSize="10">Projecten</text>
        </g>

        <g id="tri" transform={triangleLoc} onClick={() => setShuffleState(1)}>
          <polygon id="triangle" fill="rgb(0, 176, 255)" points="22,0 44,36 0,36" className="triangle"></polygon>
          <text x="3" y="49" fontSize="10">Contact</text>
        </g>

        <g id="rec" transform={squareLoc} onClick={() => setShuffleState(2)}>
          <rect id="rectangle" fill="rgb(255, 235, 59)" width="35" height="35"></rect>
          <text x="4" y="49" fontSize="10">Over mij</text>
        </g>
      </svg>
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