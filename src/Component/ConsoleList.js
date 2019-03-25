import React, { Component } from "react";
import { connect } from "react-redux";
import { selectConsole } from "../actions/index";
import "./app.css"

class ConsoleList extends Component {
  renderList() {
    console.log(this.props)
    return this.props.console.map(consoleItem => {
      return (
        <div className="row" key={consoleItem.title}>
          <div className="col-sm-8">
            <div class="card bg-light mb-3">
              <div class="card-body">
                <div class="card-header">
                  <h4 className="card-title">{consoleItem.title}</h4>
                  <p className="card-text">{consoleItem.annee}</p>
                </div>
                <br />
                <img src={consoleItem.url} alt="nintendo" />
            <div>
              <br />
                <div class="card-footer text-muted">
                  <button type="button" className="btn btn-dark"
                  onClick={() => {
                  this.props.selectConsole(consoleItem);
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

const mapStateToProps = (state, props) => {
  console.log(props)
  if(props.console === 'nintendo') {
    return { console: state.nintendo };
  }
  if(props.console === 'sega') {
    return { console: state.sega };
  }
  if(props.console === 'sony') {
    return { console: state.sony };
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectConsole: (consoleItem) => dispatch(selectConsole(consoleItem))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConsoleList);
