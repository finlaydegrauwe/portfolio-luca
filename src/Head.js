import React, { useState, useEffect } from "react";
import firebase from "./firebase";

function Head() {
  const [projecten, setProjecten] = useState([]);
  const [selectedTag, setSelectedTag] = useState();
  const ref = firebase.firestore().collection("projecten");

  function fetchProjecten() {
    ref.onSnapshot((querySnapshot) => {
      const items = new Set();
      querySnapshot.forEach((doc) => {
        let docTag = doc.get("tags");
        for (let i = 0; i < docTag.length; i++) {
          items.add(docTag[i]);
        }
      });
      setProjecten(Array.from(items));
    });
  }

  useEffect(() => {
    fetchProjecten();
  }, []);

  return (
    <div className="head">
      <div>
        <h1 className="paginatitel">Projecten</h1>
      </div>
      <p className="paginabeschrijving">
        Dit is een greep uit al de projecten die ik tot nu toe realiseerde. Er
        komen verscheidene thema's terug waarmee ik doorheen mijn professionele-
        en schoolcarrière in contact kwam.
      </p>
      <div>
        <strong>Tags</strong>
        <div className="d-flex flex-wrap justify-content-between mt-1">
          {projecten.map((project) => (
            <a
              className="badge m-1 badge-pill badge-info"
              key={project}
            >
              {project}
            </a>
          ))}
          {/*<a
            href="https://www.google.com"
            className="badge m-1 badge-pill badge-primary"
          >
            Tag 1
          </a>
          <a href="" className="badge m-1 badge-pill badge-secondary">
            Tag 2
          </a>
          <a href="" className="badge m-1 badge-pill badge-success">
            Tag 3
          </a>
          <a href="" className="badge m-1 badge-pill badge-danger">
            Tag 4
          </a>
          <a href="" className="badge m-1 badge-pill badge-warning">
            Tag 5
          </a>
          <a href="" className="badge m-1 badge-pill badge-info">
            Tag 6
  </a>*/}
        </div>
      </div>
    </div>
  );
}

export default Head;
