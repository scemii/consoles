import React from "react";
import { connect } from "react-redux";


const ConsoleDetailSega = ({ sega }) => {
  if (!sega) {
    return <div className="item">Sélectionnez une console</div>;
  }
  return (
    <div className="consoleDetail">
      <h3>Détails:</h3>
      <h3>Console: {sega.title}</h3>
      <p>Année de commercialisation: {sega.annee}</p>
      <p>Histoire: {sega.description}</p>
      <h3>Specs:</h3>
      <li>CPU : {sega.cpu}</li>
      <li>Mémoire : {sega.memoire}</li>
      <br />
      <img src={sega.url2} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    sega: state.selectedConsoleSega
  };
};

export default connect(mapStateToProps)(ConsoleDetailSega);
