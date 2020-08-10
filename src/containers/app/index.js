import React from "react";
import "./style.scss";
import { ACCORDIONDATA } from "./seeder-mohsen";
import AccordionMohsen from "../../components/accordion-mohsen/accordion";
import MainTree from "../../components/menu-tree/main-tree/main-tree";
import Counter from "../app-counter/App";

function App() {
  return (
    <div className="page-wrapper">
      <div className="header">
        <div className="date">Reactjs BootCamp 1399-05</div>
        <div className="title">Sample Components to use.</div>
      </div>
      <div className="main-container">
        <div className="card">
          <AccordionMohsen items={ACCORDIONDATA} />
        </div>
        <div className="card">
          <MainTree />
        </div>
        <div className="card">
          <Counter />
        </div>
        <div className="card"> COMPONENT</div>
        <div className="card"> COMPONENT</div>
        <div className="card"> COMPONENT</div>
      </div>
    </div>
  );
}

export default App;
