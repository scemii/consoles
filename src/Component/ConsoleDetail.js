import React from "react";
import { connect } from "react-redux";
import nintendoLogo from "../assets/nintendoLogo.png";

const ConsoleDetail = ({ nintendo }) => {
  if (!nintendo) {
    return (<div className="item">
    <h3>
    Sélectionnez une console
    </h3>
    </div>);
  }
  return (
  <div className="consoleDetail">
    <div class="row">
      <div class="col-sm-16">
        <div class="card">
          <div class="card-body">
            <img className="logo"src ={nintendoLogo} />
            <h3 class="card-title">Console: {nintendo.title}</h3>
            <p class="card-text">Année de commercialisation: {nintendo.annee}</p>
            <p class="card-text">Histoire: {nintendo.description}</p>
            <h3 class="card-title">Specs</h3>
            <p class="card-text">
              <li>CPU : {nintendo.cpu}</li>
              <li>Mémoire : {nintendo.memoire}</li>
              <li>Affichage : {nintendo.affichage}</li>
              <li>Taille : {nintendo.taille}</li>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};


const mapStateToProps = state => {
  return {
    nintendo: state.selectedConsole
  };
};

export default connect(mapStateToProps)(ConsoleDetail);
