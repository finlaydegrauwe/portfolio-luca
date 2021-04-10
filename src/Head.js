import React from "react";

function Head() {
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
          <a
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
          </a>
        </div>
      </div>
    </div>
  );
}

export default Head;
