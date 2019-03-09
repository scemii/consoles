import React, { Component } from "react";
import { connect } from "react-redux";
import { selectConsoleSega } from "../actions/index";

class ConsoleListSega extends Component {
  renderList() {
    return this.props.sega.map(sega => {
      return (
        <div className="item" key={sega.title}>
          <div className="right floated content">
            <button
              onClick={() => {
                this.props.selectConsoleSega(sega);
              }}
              className="ui button primary"
            >
              Select
            </button>
          </div>
          <div className="content">
            <p className="content">{sega.title}</p>
            <p className="content">{sega.annee}</p>
            <img src={sega.url} />
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
