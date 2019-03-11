import React, { Component } from "react";
import { connect } from "react-redux";
import { selectConsoleNintendo } from "../actions/index";
import "./app.css"

class ConsoleList extends Component {
  renderList() {
    return this.props.nintendo.map(nintendo => {
      return (
        <div className="row" key={nintendo.title}>
          <div className="col-sm-8">
            <div class="card bg-light mb-3">
              <div class="card-body">
                <div class="card-header">
                  <h4 className="card-title">{nintendo.title}</h4>
                  <p className="card-text">{nintendo.annee}</p>
                </div>
                <img src={nintendo.url} />
            <div>
              <br />
                <div class="card-footer text-muted">
                  <button type="button" className="btn btn-dark"
                  onClick={() => {
                  this.props.selectConsoleNintendo(nintendo);
                  }}
                  >
                  Détails
                  </button>
                </div>
              <br className="separateur" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  });
}


  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { nintendo: state.nintendo };
};

export default connect(
  mapStateToProps,
  { selectConsoleNintendo }
)(ConsoleList);
