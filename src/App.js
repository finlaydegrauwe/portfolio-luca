import React, { useState } from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Head from "./Head";
import Project from "./Project";
import Nav from "./Nav";
import Foot from "./Foot";

function App() {
  const [projects, setProjects] = useState([
    { name: "Project 1", text: "Beschrijving" },
    { name: "Project 2", text: "Beschrijving" },
    { name: "Project 3", text: "Beschrijving" },
    { name: "Project 4", text: "Beschrijving" },
  ]);

  return (
    <div className="wrapper">
      <Nav className="menu" />
      <Head className="head" />
      <div className="main">{projects.map((project, index) => (
        <Project key={index} className="mx-4" name={project.name} text={project.text} />
      ))}</div>
      <Foot className="foot"/>
    </div>
  );
}

export default App;
