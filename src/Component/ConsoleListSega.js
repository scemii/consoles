import React, { Component } from "react";
import { connect } from "react-redux";
import { selectConsoleSega } from "../actions/index";

class ConsoleListSega extends Component {
  renderList() {
    return this.props.sega.map(sega => {
      return (
        <div className="row" key={sega.title}>
          <div className="col-sm-8">
            <div class="card bg-light mb-3">
              <div class="card-body">
                <div class="card-header">
                  <h4 className="card-title">{sega.title}</h4>
                  <p className="card-text">{sega.annee}</p>
                </div>
              <img src={sega.url} />
            <div>
              <br />
                <div class="card-footer text-muted">
                  <button type="button" className="btn btn-dark"
                  onClick={() => {
                  this.props.selectConsoleSega(sega);
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
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { sega: state.sega };
};

export default connect(
  mapStateToProps,
  { selectConsoleSega }
)(ConsoleListSega);
