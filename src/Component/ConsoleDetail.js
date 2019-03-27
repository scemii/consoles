import React from "react";
import { connect } from "react-redux";
import "./app.css"

const ConsoleDetail = ({ console }) => {
  if (!console) {
    return (<div className="item">
    <h3>
    Sélectionnez une console
    </h3>
    </div>);
  }
  return (
  <div className="consoleDetail">
    <div class="row">
      <div className="Card">
        <div class="card border-dark mb-3">
          <div class="card-body">
            <div className="row">
              <div className="col-sm">
                <img className="logo"src ={console.url2} alt='nintendo' />
              </div>
            <div className="col-sm"></div>
              <img className="logo"src ={console.url} alt="nintendo" />
            </div>
            <br />
            <h3 class="card-title">Console: {console.title}</h3>
            <p class="card-text">Année de commercialisation: {console.annee}</p>
            <p class="card-text">Histoire: {console.description}</p>
            <h3 class="card-title">Specs</h3>
            <p class="card-text">
              <li>CPU : {console.cpu}</li>
              <li>Mémoire : {console.memoire}</li>
              <li>Affichage : {console.affichage}</li>
              <li>Taille : {console.taille}</li>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};


const mapStateToProps = (state, props) => {
  return { console: state.selectedConsole };
};

export default connect(mapStateToProps)(ConsoleDetail);
