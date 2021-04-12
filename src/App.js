import React, { useState, useEffect } from "react";
import "./App.css";
import Head from "./Head";
import Project from "./Project";
import Nav from "./Nav";
import Foot from "./Foot";
import firebase from "./firebase";

function App() {
  const [projecten, setProjecten] = useState([]);
  const ref = firebase.firestore().collection("projecten");
  
  function fetchProjecten() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setProjecten(items);
    });
  }

  useEffect(() => {
    fetchProjecten();
  }, [])

  return (
    <div className="wrapper">
      <Nav className="menu" />
      <Head className="head" />
      <div className="main">
        {projecten.map((project, index) => (
        <Project key={project.id} className="mx-4" name={project.name} text={project.beschrijving} highlight={project.highlight} />
      ))}</div>
      <Foot className="foot"/>
    </div>
  );
}

export default App;
