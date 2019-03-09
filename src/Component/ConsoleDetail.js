import React from "react";
import { connect } from "react-redux";

const ConsoleDetail = ({ nintendo }) => {
  if (!nintendo) {
    return <div className="item">Sélectionnez une console</div>;
  }
  return (
    <div>
      <h3>Détails:</h3>
      <p>Console: {nintendo.title}</p>
      <p>Année de commercialisation: {nintendo.annee}</p>
      <p>Histoire: {nintendo.description}</p>
      <h3>Specs:</h3>
      <li>CPU : {nintendo.cpu}</li>
      <li>Mémoire : {nintendo.memoire}</li>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    nintendo: state.selectedConsole
  };
};

export default connect(mapStateToProps)(ConsoleDetail);
