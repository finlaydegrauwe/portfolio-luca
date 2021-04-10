import React, { useState } from "react";
import Card from "react-bootstrap/Card";

function ProjectContent(props){
  const [projectOpen,setProjectOpen] = useState(false);
  if (projectOpen){
    return(
      <div style={{order: "-1", width:"100%"}}>
      <Card className="projecten" onClick={() => setProjectOpen(false)} style={{border: "0px solid black", cursor: "default"}} >
        <h2 className="mr-2" style={{textAlign:"right"}}>x</h2><Card.Img variant="top" src="https://www.sqlbi.com/okviz/wp-content/uploads/sites/261/2019/01/chart-placeholder-icon.svg" />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
        </Card.Body>
      </Card>
    </div>
    )
  }
    return(
      <div>
    <Card className="projecten" style={{ border: "0px solid black"}} onClick={() => setProjectOpen(true)} >
      <Card.Img variant="top" src="https://www.sqlbi.com/okviz/wp-content/uploads/sites/261/2019/01/chart-placeholder-icon.svg" />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  </div>
    )
}

function Project(props) {
  return(
    <ProjectContent name={props.name} text={props.text}/>
  )
}

/*
function Project(props) {
  const [projectOpen,setProjectOpen] = useState(false);
  if (projectOpen) {
    return (<div>
      <Card className="projecten" style={{ border: "0px solid black", width: "1000px"}} >
        <Card.Img variant="top" src="https://www.sqlbi.com/okviz/wp-content/uploads/sites/261/2019/01/chart-placeholder-icon.svg" />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
          <button onClick={() => setProjectOpen(false)}>Close</button>
        </Card.Body>
      </Card>
    </div>)
  }
  return (<div>
    <Card className="projecten" style={{ border: "0px solid black"}} onClick={() => setProjectOpen(true)} >
      <Card.Img variant="top" src="https://www.sqlbi.com/okviz/wp-content/uploads/sites/261/2019/01/chart-placeholder-icon.svg" />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  </div>)
}
*/
export default Project;